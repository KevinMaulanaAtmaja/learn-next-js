import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title: "Pongo 760 v2",
        price: 16000,
        image: "https://www.axiooworld.com/uploads/products/381129cc-9ea2-42a9-87cb-eae3c0878367.png?h=554&w=732&s=b52d7cb06989f45a87b59c4a7384ab34",
    },
    {
        id: 2,
        title: "HP Victus 16",
        price: 18000,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7qula-ljl9u9h34gcv44.webp",
    },
];

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    console.log(id);

    if (id) {
        const detailProduct = data.find((item) => item.id == Number(id));
        if (detailProduct) {
            return NextResponse.json({ status: 200, message: "Success", data: detailProduct });
        }
        return NextResponse.json({ status: 404, message: "Not Found", data: {} });
    }

    return NextResponse.json({ status: 200, message: "Success", data: data });
}
