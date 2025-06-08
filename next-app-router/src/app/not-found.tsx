import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-9xl">404</h1>
            <h2 className="mb-5 text-2xl">Page Not Found</h2>
            <Link href="/" className="bg-blue-400 text-white px-5 py-2 rounded-lg">
                Back to Home
            </Link>
        </div>
    );
}
