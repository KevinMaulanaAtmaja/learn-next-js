"use client";
import { useState } from "react";

export default function template({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState(0);
    return (
        <div>
            <h1>Template: {state}</h1>
            <button className="bg-emerald-300  border border-b-bg-emerald-900 py-1 px-8" onClick={() => setState(state + 1)}>
                Klik
            </button>
            {children}
        </div>
    );
}
