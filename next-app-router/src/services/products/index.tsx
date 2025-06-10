export const getData = async (url: string) => {
    const res = await fetch(url, { cache: "no-store" });
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`,
    //     {
    //         // cache: "no-store",
    //         cache: "force-cache",
    //         next: {
    //             // revalidate: 10,
    //             tags: ["products"]
    //         }
    //     }
    // );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};
