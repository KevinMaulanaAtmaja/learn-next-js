"use client";

import { useState } from "react";

export default function AdminProductPage() {
    const [status, setStatus] = useState("");
    const revalidate = async () => {
        const res = await fetch(`http://localhost:3000/api/revalidate?tag=products&secret=yttaAja`, { method: "POST" });
        if (!res.ok) {
            setStatus("Revalidate Failed");
        } else {
            const response = await res.json();
            if (response.revalidate) {
                setStatus("Revalidate Success");
            }
        }
    };

    return (
        <div className="h-screen w-full flex justify-center items-center flex-col ">
            <h1>{status}</h1>
            <button onClick={() => revalidate()} className=" text-black border border-black cursor-pointer rounded-md py-2 px-6">
                Revalidate
            </button>
        </div>
    );
}
