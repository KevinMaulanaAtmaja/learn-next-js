export default function FooterLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className="fixed bottom-0 h-20 w-full bg-gray-800 left-0">
                <ul className="text-white px-5 py-5 flex gap-5">
                    <li>Home</li>
                    <li>About</li>
                    <li>Profile</li>
                </ul>
            </nav>
            <div>{children}</div>
        </>
    );
}
