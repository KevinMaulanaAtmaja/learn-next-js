"use client";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";

// import { getData } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

type ProductPageProps = { params: { slug: string[] } };

export default function ProductPage(props: ProductPageProps) {
    const { params } = props;
    // const products = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
    const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, fetcher);
    const products = data?.data;

    return (
        <>
            {/* <h1>{params.slug ? "Detail Product Page" : "Product Page"}</h1>*/}

            <div className="grid grid-cols-3 mt-5 place-items-center">
                {/* {products.data.length > 0 &&
                    products.data.map((product: any) => ( */}
                        {products?.length > 0 &&
                            products?.map((product: any) => (
                        <Link
                            href={`/products2/detail/${product.id}`}
                            key={product.id}
                            className="w-11/12 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 my-5"
                        >
                            <Image
                                className="p-8 rounded-t-lg object-cover w-full h-48"
                                src={product.image}
                                alt={product.title}
                                width={500}
                                height={500}
                                // priority
                                loading="lazy"
                            />
                            <div className="px-5 pb-5">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                                    {product.name}
                                </h5>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {product.price}</span>
                                    <button
                                        type="button"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </Link>
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
