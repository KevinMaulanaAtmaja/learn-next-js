import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName));

    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return data;
}

export async function retrieveDataById(colectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, colectionName, id));
    const data = snapshot.data();
    return data;
}

export async function signUp(
    userData: {
        email: string;
        fullname: string;
        password: string;
        role?: string;
    },
    callback: Function
) {
    const q = query(collection(firestore, "users"), where("email", "==", userData.email));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    if (data.length > 0) {
        console.log(data);
        callback({ status: false, message: "Email already registered" });
    } else {
        userData.password = await bcrypt.hash(userData.password, 10);
        userData.role = "member";

        await addDoc(collection(firestore, "users"), userData)
            .then(() => {
                callback({ status: true, message: "Register success" });
            })
            .catch((error) => callback({ status: false, message: error }));
    }
}

export async function signIn(userData: { email: string }) {
    const q = query(collection(firestore, "users"), where("email", "==", userData.email));
    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    // console.log(`data: ${data}`);

    if (data) {
        return data[0];
    } else {
        return null;
    }
}

export async function signInWithGoogle(userData: any, callback: any) {
    const q = query(collection(firestore, "users"), where("email", "==", userData.email));
    const snapshot = await getDocs(q);
    console.log(snapshot);

    const data: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    if (data.length > 0) {
        userData.role = data[0].role;
        await updateDoc(doc(firestore, "users", data[0].id), userData)
            .then(() => {
                callback({ status: true, message: "Sign in with Google success", data: userData });
            })
            .catch((error) => {
                callback({ status: false, message: `Sign in with Google failed, ${error}` });
            });
    } else {
        userData.role = "member";
        await addDoc(collection(firestore, "users"), userData)
            .then(() => {
                callback({ status: true, message: "Sign in with Google success", data: userData });
            })
            .catch((error) => {
                callback({ status: false, message: `Sign in with Google failed, ${error}` });
            });
    }
}
