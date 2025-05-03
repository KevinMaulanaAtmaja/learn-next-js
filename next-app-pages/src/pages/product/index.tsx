import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductPage() {
    const { push } = useRouter();
    const [isLogin, setIsLogin] = useState();

    useEffect(() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, []);
    return (
        <div>
            <h1>Product Page</h1>
        </div>
    );
}
