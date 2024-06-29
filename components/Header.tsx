import Link from "next/link";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import {Button} from "@/components/ui/button";
import {LuMoon, LuSun} from "react-icons/lu";
import {useTheme} from "next-themes";

const Header = () =>{

    return (
        <header className={'py-8 xl:py-12'}>
            <div className={'container mx-auto flex justify-between items-center'}>
                <Link href={'/'}>
                    <h1 className={'text-4xl font-semibold'}>Rent <span className={'text-accent italic'}>anything</span> </h1>
                </Link>

                {/* desktop nav */}
                <div className={'hidden xl:flex items-center gap-8'}>
                    <Nav />
                </div>
                {/* mobile nav*/}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header