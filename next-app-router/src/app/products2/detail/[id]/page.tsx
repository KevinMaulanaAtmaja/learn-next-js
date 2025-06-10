"use client";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";

// import { getData } from "@/services/products";
import Image from "next/image";

export default function DetailProductPage(props: any) {
    const { params } = props;
    // const product = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/products/?id=` + params.id);
    const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/products/?id=${params.id}`, fetcher);
    const product = data?.data;
    // console.log(product.data);

    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto border border-gray-700">
                <Image
                    src={product?.image}
                    alt=""
                    className="w-full object-cover aspect-square col-span-2"
                    width={500}
                    height={500}
                />
                <div className="bg-white p-4 px-4">
                    <h3>{product?.name}</h3>
                    <p>Price: ${product?.price}</p>
                </div>
            </div>
        </div>
    );
}
