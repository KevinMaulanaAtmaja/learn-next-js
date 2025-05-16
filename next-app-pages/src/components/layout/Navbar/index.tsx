import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const { data }: any = useSession();
    return (
        <div className={styles.navbar}>
            <h1>Navbar</h1>
            <div className={styles.profile}>
                {data?.user?.image && <img src={data.user.image} alt={data.user.fullname} className={styles.avatar} />}
                {data && data?.user?.fullname}{" "}
                {data ? (
                    <button className={styles.button} onClick={() => signOut()}>
                        Sign Out
                    </button>
                ) : (
                    <button className={styles.button} onClick={() => signIn()}>
                        Sign In
                    </button>
                )}
            </div>
        </div>
    );
}
