'use client'
import {usePathname} from "next/navigation";
import Link from "next/link";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "register",
        path: "/auth/register",
    },
    {
        name:"login",
        path:"/auth/login",
    },
]

const Nav = () => {
    const pathname = usePathname();


    return (
        <nav className={'flex gap-8'}>
            {links.map((link, index) => {
                return (
                    <Link
                        key={index}
                        href={link.path}
                        className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Nav