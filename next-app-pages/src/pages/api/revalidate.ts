// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    revalidate: boolean;
    message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.query.token !== process.env.REVALIDATE_TOKEN) {
        res.status(401).json({ revalidate: false, message: "Insert correct token" });
    }

    if (req.query.data === "product") {
        try {
            await res.revalidate("/products/inc-static");
            return res.json({ revalidate: true });
        } catch (error) {
            return res.status(500).json({ revalidate: false });
        }
    }
    return res.json({ revalidate: false, message: "Select data to revalidate" });
}
