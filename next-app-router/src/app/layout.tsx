"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });
const disabledNavbar = ["/login", "/register"];
const allowCount = ["/", "/about", "/about/profile"];

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState(0);
    const pathname = usePathname();

    return (
        <html lang="en">
            <body className={inter.className}>
                <SessionProvider>
                    {!disabledNavbar.includes(pathname) && <Navbar />}
                    <div className="mx-5">
                        {allowCount.includes(pathname) && (
                            <>
                                <h1>Layout: {state}</h1>
                                <button
                                    className="bg-blue-300  border border-b-blue-900 py-1 px-8"
                                    onClick={() => setState(state + 1)}
                                >
                                    Klik
                                </button>
                            </>
                        )}
                        {children}
                    </div>
                </SessionProvider>
            </body>
        </html>
    );
}
