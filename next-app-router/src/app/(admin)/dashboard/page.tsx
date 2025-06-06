"use client";
import Script from "next/script";

export default function DashboardPage() {
    return (
        <div className="w-full h-72 bg-orange-400 rounded-[12px] flex justify-center items-center">
            <h1>Dashboard</h1>
            <h4 id="deskripsi"></h4>
            <Script
                id="deskripsi-script"
                strategy="lazyOnload"
            >{`document.getElementById("deskripsi").innerHTML = ": Deskripsi dari Script";`}</Script>
        </div>
    );
}
