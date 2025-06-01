"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
    const router = useRouter();
    const { data: session, status }: { data: any; status: string } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        } else {
            if (session !== undefined && session?.user.role !== "admin") {
                router.push("/");
            }
        }
    }, [session, router, session?.user.role, status]);

    return (
        <div className="w-full h-72 bg-orange-400 rounded-[12px] flex justify-center items-center">
            <h1>Dashboard</h1>
        </div>
    );
}
