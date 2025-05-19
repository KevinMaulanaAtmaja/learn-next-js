// import { ProductType } from "@/types/product.type";
// import ProductView from "@/views/Products";

// export default function ProductStaticPage(props: { products: ProductType[] }) {
//     const { products } = props;

//     return (
//         <>
//             <ProductView prods={products} />
//         </>
//     );
// }

// // dipanggil setiap melakukan request
// export async function getStaticProps() {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
//     const response = await res.json();

//     return {
//         props: {
//             products: response.data,
//         },
//         // revalidate: 10,
//     };
// }

export default function incStatic() {
    return (
        <div>
            <h1>Incremental Static Page</h1>
        </div>
    );
}
