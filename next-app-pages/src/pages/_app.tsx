import Appshell from "@/components/layout/AppShell";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <Appshell>
                <Component {...pageProps} />
            </Appshell>
        </SessionProvider>
    );
}
