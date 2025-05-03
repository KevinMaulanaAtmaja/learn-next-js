import { useRouter } from "next/router";
// [id] => utk 1 param
// [...id] => utk lebih dari 1 param
// [[...id]] => utk lebih dari 1 param + param opt

export default function DetailShopPage() {
    const { query } = useRouter();

    return (
        <div>
            <h1>Detail Shop</h1>
            <p>Shop: {`${query.slug ? query.slug[0] + " - " + query.slug[1] : "Kosong"}`}</p>
        </div>
    );
}
