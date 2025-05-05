import styles from "@/styles/404.module.scss";

export default function Custom404() {
    return (
        <div className={styles.error}>
            <img src="/404.png" alt="404" className={styles.error__image} />
            <h1>Halaman Tidak Ditemukan</h1>
        </div>
    );
}
