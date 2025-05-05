import { useRouter } from "next/router";
import Navbar from "../Navbar";

type AppshellProps = {
    children: React.ReactNode;
};

const disabledNavbar = ["/auth/login", "/auth/register", "/404"];

export default function Appshell(props: AppshellProps) {
    const { children } = props;
    const { pathname } = useRouter();

    return (
        <main>
            {!disabledNavbar.includes(pathname) && <Navbar />}
            {children}
        </main>
    );
}
