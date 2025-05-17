import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
import Script from "next/script";
import Image from "next/image";

export default function Navbar() {
    const { data }: any = useSession();
    return (
        <div className={styles.navbar}>
            <h1 id="title"></h1>
            <Script id="title-script" strategy="lazyOnload">{`document.getElementById("title").innerHTML = "Navbar";`}</Script>
            <div className={styles.profile}>
                {/* {data?.user?.image && <img src={data.user.image} alt={data.user.fullname} className={styles.avatar} />} */}
                {data?.user?.image && (
                    <Image src={data.user.image} alt={data.user.fullname} width={30} height={30} className={styles.avatar} />
                )}
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
