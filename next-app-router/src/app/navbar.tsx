import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
    const pathName = usePathname();
    const router = useRouter();
    const { status } = useSession();

    return (
        <nav className="flex bg-gray-800 py-2 px-5 justify-between">
            <div className="flex">
                <h1 className="text-white">Navbar</h1>
                <ul className="flex ml-5">
                    <Link href="/">
                        <li className={`mr-3 ${pathName === "/" ? "text-blue-300" : "text-white"} cursor-pointer `}>Home</li>
                    </Link>
                    <Link href="/about">
                        <li className={`mr-3 ${pathName === "/about" ? "text-blue-300" : "text-white"} cursor-pointer `}>
                            About
                        </li>
                    </Link>
                    <Link href="/about/profile">
                        <li className={`mr-3 ${pathName === "/about/profile" ? "text-blue-300" : "text-white"} cursor-pointer `}>
                            Profile
                        </li>
                    </Link>
                </ul>
            </div>
            <div>
                {/* <button className="bg-white rounded-md py-1 px-8" onClick={() => router.push("/login")}>
                    Login
                </button> */}
                {status === "authenticated" ? (
                    <button className="bg-white rounded-md py-1 px-8" onClick={() => signOut()}>
                        Logout
                    </button>
                ) : (
                    <button className="bg-white rounded-md py-1 px-8" onClick={() => signIn()}>
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
}
