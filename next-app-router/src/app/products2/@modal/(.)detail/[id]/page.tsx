// import Modal from "@/components/core/Modal";
import { getData } from "@/services/products";
import Image from "next/image";
import dynamic from "next/dynamic";
const Modal = dynamic(() => import("@/components/core/Modal"), { loading: () => <p>...Loading</p> });

export default async function DetailProductPage(props: any) {
    const { params } = props;
    const product = await getData("http://localhost:3000/api/products/?id=" + params.id);

    return (
        <Modal>
            <Image
                src={product.data.image}
                alt=""
                className="w-full object-cover aspect-square col-span-2"
                width={500}
                height={500}
            />
            <div className="bg-white p-4 px-4">
                <h3>{product.data.name}</h3>
                <p>Price: ${product.data.price}</p>
            </div>
        </Modal>
    );
}
