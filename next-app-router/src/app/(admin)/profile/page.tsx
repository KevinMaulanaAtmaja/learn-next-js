"use client";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
    const { data: session } = useSession();
    return (
        <div>
            <h1>Profile Page</h1>
            <h4>{session?.user?.fullname}</h4>
        </div>
    );
}
