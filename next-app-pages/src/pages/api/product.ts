import { retrieveData } from "@/lib/firebase/sevice";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    status: boolean;
    statusCode: number;
    data: any;
    // data: {
    //     id: number;
    //     name: string;
    //     price: number;
    //     size: string;
    // }[];
};

// const data = [
//     {
//         id: 1,
//         name: "Laptop Axioo Pongo 735",
//         price: 12000000,
//         size: "15.6 inch",
//     },
//     {
//         id: 2,
//         name: "Laptop HP Victus 16",
//         price: 18000000,
//         size: "15.6 inch",
//     },
// ];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const data = await retrieveData("products");
    res.status(200).json({ status: true, statusCode: 200, data });
}
