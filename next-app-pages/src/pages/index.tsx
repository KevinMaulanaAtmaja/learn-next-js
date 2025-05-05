import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <meta name="description" content="Text Head Component" />
                <title>Home</title>
            </Head>
            <h1>Hello World</h1>
        </>
    );
}
