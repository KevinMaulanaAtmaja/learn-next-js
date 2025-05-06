import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type productType = {
    id: number;
    name: string;
    price: number;
    size: string;
};

export default function ProductPage() {
    const { push } = useRouter();
    const [isLogin, setIsLogin] = useState();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, []);

    useEffect(() => {
        fetch("/api/product")
            .then((res) => res.json())
            .then((res) => res.json)
            .then((response) => setProduct(response.data));
    }, []);

    return (
        <div>
            <h1>Product Page</h1>
            {product.map((prod: productType) => (
                <div key={prod.id}>{prod.name}</div>
            ))}
        </div>
    );
}
