import { useRouter } from "next/router";

export default function DetailShopPage() {
    const { query } = useRouter();
    return (
        <div>
            <h1>Detail Shop</h1>
            <p>Shop: {query.id}</p>
        </div>
    );
}
