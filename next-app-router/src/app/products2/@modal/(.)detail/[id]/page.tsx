"use client";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";

// import Modal from "@/components/core/Modal";
// import { getData } from "@/services/products";
import Image from "next/image";
import dynamic from "next/dynamic";
const Modal = dynamic(() => import("@/components/core/Modal"), { loading: () => <p>...Loading</p> });

export default function DetailProductPage(props: any) {
    const { params } = props;
    // const product = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/products/?id=` + params.id);
    const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/products/?id=${params.id}`, fetcher);
    const product = data?.data;

    return (
        <Modal>
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
        </Modal>
    );
}
