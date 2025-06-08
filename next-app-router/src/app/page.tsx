import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home | Next App",
    description: "Some description",
    authors: [{ name: "Kevin Maulana", url: "https://github.com/kevinmaulanaatmaja" }],
    icons: { icon: "/icon.jpg" },
    // muncul saat di share
    openGraph: {
        title: "Home | Next App",
        description: "Some description",
        images: [{ url: "/icon.jpg" }],
    },
};

export default function Home() {
    // nyoba error
    // throw new Error("Something went wrong");
    return <main className="flex min-h-screen flex-col items-center justify-between p-24">Hello World!</main>;
}
