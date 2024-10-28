"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "services",
        href: "/services",
    },
    {
        name: "resume",
        href: "/resume",
    },
    {
        name: "work",
        href: "/work",
    },
    {
        name: "contact",
        href: "/contact",
    }
];


const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link href={link.href} key={index} className={``}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}

export default Nav