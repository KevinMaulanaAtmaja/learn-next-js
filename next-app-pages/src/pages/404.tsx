import styles from "@/styles/404.module.scss";
import Image from "next/image";

export default function Custom404() {
    return (
        <div className={styles.error}>
            {/* <img src="/404.png" alt="404" className={styles.error__image} /> */}
            <Image src="/404.svg" alt="404 Page" className={styles.error__image} width={500} height={500} />
            <h1>Halaman Tidak Ditemukan</h1>
        </div>
    );
}
