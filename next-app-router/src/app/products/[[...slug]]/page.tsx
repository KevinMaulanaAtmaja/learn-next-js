import { getData } from "@/services/products";
import Image from "next/image";

type ProductPageProps = { params: { slug: string[] } };

export default async function ProductPage(props: ProductPageProps) {
    const { params } = props;
    const products = await getData("https://fakestoreapi.com/products");

    return (
        <>
            {/* <h1>{params.slug ? "Detail Product Page" : "Product Page"}</h1>*/}

            <div className="grid grid-cols-3 mt-5 place-items-center">
                {/* {products.data.length > 0 &&
                    products.data.map((product: any) => ( */}
                {products.length > 0 &&
                    products.map((product: any) => (
                        <div
                            key={product.id}
                            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 my-5"
                        >
                            <a href="#">
                                <Image
                                    className="p-8 rounded-t-lg object-cover w-full h-48"
                                    src={product.image}
                                    alt={product.title}
                                    width={200}
                                    height={200}
                                />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                                        {product.title}
                                    </h5>
                                </a>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {product.price}</span>
                                    <a
                                        href="#"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Add to cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            {params.slug && (
                <p>
                    Merk: {params.slug[0]}, Seri: {params.slug[1]}, Tipe: {params.slug[2]}
                </p>
            )}
        </>
    );
}
