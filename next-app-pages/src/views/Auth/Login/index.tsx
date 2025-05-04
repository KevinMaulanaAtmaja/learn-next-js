import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

export default function LoginView() {
    // const router = useRouter();
    const { push, query } = useRouter();
    const handlerLogin = () => {
        push("/product");
    };
    return (
        <div className={styles.login}>
            <h1 className="big-text">Login Page</h1>
            <button className="border-black bg-blue-800" onClick={() => handlerLogin()}>
                Login
            </button>
            <p>
                Dont have an account?{" "}
                <Link href="/auth/register">
                    <span style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}> click here</span>
                </Link>
            </p>
        </div>
    );
}
