import { ProductType } from "@/types/product.type";
import ProductView from "@/views/Products/products";

export default function ProductServerPage(props: { products: ProductType[] }) {
    const { products } = props;

    return (
        <div>
            <ProductView prods={products} />
        </div>
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
