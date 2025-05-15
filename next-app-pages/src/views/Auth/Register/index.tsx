import Link from "next/link";
import styles from "./Register.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";

export default function RegisterView() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const { push } = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);
        const data = {
            email: event.target.email.value,
            fullname: event.target.fullname.value,
            password: event.target.password.value,
        };
        const result = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        // console.log(result);

        if (result.status === 200) {
            event.target.reset();
            push("/auth/login");
            setIsLoading(false);
        } else {
            setIsLoading(false);
            setError(result.status === 400 ? "Email already registered" : "");
        }
    };

    return (
        <div className={styles.register}>
            <h1 className={styles.register__title}>Register</h1>
            {error && <p className={styles.register__error}>{error}</p>}
            <form onSubmit={handleSubmit} className={styles.register__form}>
                <div className={styles.register__form__item}>
                    <label htmlFor="fullname" className={styles.register__form__item__label}>
                        Fullname
                    </label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        placeholder="Fullname"
                        className={styles.register__form__item__input}
                    />
                </div>
                <div className={styles.register__form__item}>
                    <label htmlFor="email" className={styles.register__form__item__label}>
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className={styles.register__form__item__input}
                    />
                </div>
                <div className={styles.register__form__item}>
                    <label htmlFor="password" className={styles.register__form__item__label}>
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className={styles.register__form__item__input}
                    />
                </div>
                <button type="submit" className={styles.register__form__button} disabled={isLoading}>
                    {isLoading ? "Loading..." : "Register"}
                </button>
            </form>
            <p className={styles.register__link}>
                Have an account? Sign In <Link href="/auth/login">here</Link>
            </p>
        </div>
    );
}
