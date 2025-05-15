import { useSession } from "next-auth/react";

export default function Profile() {
    const { data }: any = useSession();
    return (
        <div>
            <h1>Profile</h1>
            <h2>Fullname: {data && data.user.fullname}</h2>
            <h2>Email: {data && data.user.email}</h2>
            <h2>Role: {data && data.user.role}</h2>
        </div>
    );
}
