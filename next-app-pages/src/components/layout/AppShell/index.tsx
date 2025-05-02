import Navbar from "../Navbar";

type AppshellProps = {
    children: React.ReactNode;
};

export default function Appshell(props: AppshellProps) {
    const { children } = props;
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
}
