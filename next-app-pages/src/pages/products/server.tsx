import { ProductType } from "@/types/product.type";
import ProductView from "@/views/Products";

export default function ProductServerPage(props: { products: ProductType[] }) {
    const { products } = props;

    return (
        <>
            <ProductView prods={products} />
        </>
    );
}

// dipanggil setiap melakukan request
export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/products");
    const response = await res.json();

    return {
        props: {
            products: response.data,
        },
    };
}
