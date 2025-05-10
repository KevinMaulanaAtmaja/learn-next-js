import { fetcher } from "@/lib/swr/fetcher";
import { ProductType } from "@/types/product.type";
import DetailProductView from "@/views/DetailProduct";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailProductPage({ product }: { product: ProductType }) {
    // client-side
    // const { query } = useRouter();
    // const { data, error, isLoading } = useSWR(`/api/products/${query.product}`, fetcher);
    return (
        <>
            {/* client-side */}
            {/* <DetailProductView prod={isLoading ? {} : data.data} /> */}
            {/* server-side & static-side */}
            <DetailProductView prod={product} />
        </>
    );
}

// export async function getServerSideProps({ params }: { params: { product: string } }) {
//     // fetch data
//     const res = await fetch(`http://localhost:3000/api/products/${params.product}`);
//     const response = await res.json();

//     return {
//         // mengirim props
//         props: {
//             product: response.data,
//         },
//     };
// }

export async function getStaticPaths() {
    // fetch data
    const res = await fetch("http://localhost:3000/api/products");
    const response = await res.json();

    // melooping tiap data & mengirim param
    const paths = response.data.map((product: ProductType) => ({
        params: {
            product: product.id,
        },
    }));
    // me-return paths & fallback
    return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { product: string } }) {
    const res = await fetch(`http://localhost:3000/api/products/${params.product}`);
    const response = await res.json();

    return {
        props: {
            product: response.data,
        },
    };
}
