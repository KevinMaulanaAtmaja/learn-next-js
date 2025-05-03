import Link from "next/link";

export default function RegisterPage() {
    return (
        <div>
            <h1>Register Page</h1>
            <p>
                Already have an account? <Link href="/auth/login">click here</Link>
            </p>
        </div>
    );
}
