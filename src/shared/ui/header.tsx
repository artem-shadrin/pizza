import Link from "next/link";

export const Header = () => {
    return (
        <header className="flex items-center justify-between gap-5">
            <Link href="" className="text-primary font-semibold text-2xl">
                PIZZA
            </Link>
            <nav className="flex gap-4 text-gray-500 font-semibold items-center">
                <Link href="">Home</Link>
                <Link href="">Menu</Link>
                <Link href="">About</Link>
                <Link href="">Contacts</Link>
                <Link href="" className="bg-primary text-white px-8 py-2 rounded-full">Login</Link>
            </nav>
        </header>
    )
}