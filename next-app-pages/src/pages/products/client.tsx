import ProductView from "@/views/Products";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetcher } from "@/lib/swr/fetcher";
import useSWR from "swr";

export default function ProductPage() {
    // const { push } = useRouter();
    // const [isLogin, setIsLogin] = useState(true);
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     if (!isLogin) {
    //         push("/auth/login");
    //     }
    // }, []);

    // useEffect(() => {
    //     fetch("/api/products")
    //         .then((res) => res.json())
    //         .then((response) => setProducts(response.data));
    // }, []);

    const { data, error, isLoading } = useSWR("/api/products", fetcher);

    return (
        <div>
            {/* <ProductView prods={products} /> */}
            <ProductView prods={isLoading ? [] : data?.data} />
        </div>
    );
}
