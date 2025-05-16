import Link from "next/link";
import styles from "./Login.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginView() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const { push, query } = useRouter();
    const callbackUrlQuery: any = query.callbackUrl || "/";

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: event.target.email.value,
                password: event.target.password.value,
                callbackUrl: callbackUrlQuery,
            });

            if (!res?.error) {
                setIsLoading(false);
                push(callbackUrlQuery);
            } else {
                setIsLoading(false);
                setError("Email or password is incorect");
            }
        } catch (error: any) {
            setIsLoading(false);
            setError("Email or password is incorect");
        }
    };

    return (
        <div className={styles.login}>
            <h1 className={styles.login__title}>Login</h1>
            {error && <p className={styles.login__error}>{error}</p>}
            <div className={styles.login__form}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.login__form__item}>
                        <label htmlFor="email" className={styles.login__form__item__label}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className={styles.login__form__item__input}
                        />
                    </div>
                    <div className={styles.login__form__item}>
                        <label htmlFor="password" className={styles.login__form__item__label}>
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className={styles.login__form__item__input}
                        />
                    </div>
                    <button type="submit" className={styles.login__form__button} disabled={isLoading}>
                        {isLoading ? "Loading..." : "Login"}
                    </button>
                </form>
                <button
                    onClick={() => signIn("google", { callbackUrl: callbackUrlQuery, redirect: false })}
                    className={styles.login__form__item__google}
                >
                    Sign In With Google
                </button>
            </div>
            <p>
                Don&apos;t have an account? Sign up
                <Link href={"/auth/register"} className={styles.login__link}>
                    {" "}
                    here
                </Link>
            </p>
        </div>
    );
}
