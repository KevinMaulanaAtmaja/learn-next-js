"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

const allowCount = ["/", "/about", "/about/profile"];

export default function template({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState(0);
    const pathname = usePathname();

    return (
        <div>
            {allowCount.includes(pathname) && (
                <>
                    <h1>Template: {state}</h1>
                    <button
                        className="bg-emerald-300  border border-b-bg-emerald-900 py-1 px-8"
                        onClick={() => setState(state + 1)}
                    >
                        Klik
                    </button>
                </>
            )}

            {children}
        </div>
    );
}
