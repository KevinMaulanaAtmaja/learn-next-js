"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
    const { push } = useRouter();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        const res = await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify({
                fullname: e.target.fullname.value,
                email: e.target.email.value,
                password: e.target.password.value,
            }),
        });

        if (res.status == 200) {
            e.target.reset();
            setIsLoading(false);
            push("/login");
        } else {
            setIsLoading(false);
            setError("Email already registered");
        }
    };

    return (
        <div className="h-screen w-full flex justify-center items-center bg-gray-100 flex-col">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign up</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {error !== "" && <p className="text-red-500 text-center">{error}</p>}
                <form className="space-y-6" onSubmit={(e) => handleSubmit(e)} method="POST">
                    <div>
                        <label htmlFor="fullname" className="block text-sm/6 font-medium text-gray-900">
                            Fullname
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="fullname"
                                id="fullname"
                                autoComplete="fullname"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {isLoading ? "Loading..." : "Sign up"}
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Already joined?{" "}
                    <Link href={"/login"} className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
