import { useRouter } from "next/router";
import { Gaegu } from "next/font/google";
// import Navbar from "../Navbar";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../Navbar"));

type AppshellProps = {
    children: React.ReactNode;
};

const gaegu = Gaegu({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});

const disabledNavbar = ["/auth/login", "/auth/register", "/404"];

export default function Appshell(props: AppshellProps) {
    const { children } = props;
    const { pathname } = useRouter();

    return (
        <main className={gaegu.className}>
            {!disabledNavbar.includes(pathname) && <Navbar />}
            {children}
        </main>
    );
}
