import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathName = usePathname();
    const { data: session, status }: { data: any; status: string } = useSession();

    return (
        <nav className="flex bg-gray-800 py-2 px-5 justify-between">
            <div className="flex items-center">
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
                {status === "authenticated" ? (
                    <div className="flex justify-center items-center">
                        <Image
                            src={"/images/profile.png"}
                            alt="profile"
                            width={100}
                            height={100}
                            className="h-10 w-10 rounded-full mr-3"
                        />
                        <h4 className="text-white mr-5">{session?.user?.fullname}</h4>
                        <button className="bg-white hover:cursor-pointer rounded-md py-1 px-8" onClick={() => signOut()}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <button className="bg-white hover:cursor-pointer rounded-md py-1 px-8" onClick={() => signIn()}>
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
}
