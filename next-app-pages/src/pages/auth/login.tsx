import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginPage() {
    // const router = useRouter();
    const { push, query } = useRouter();
    const handlerLogin = () => {
        push("/product");
    };
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => handlerLogin()}>Login</button>
            <p>
                Dont have an account? <Link href="/auth/register">click here</Link>
            </p>
        </div>
    );
}
