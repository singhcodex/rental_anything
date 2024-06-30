import {GiReceiveMoney} from "react-icons/gi";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {FiArrowRight} from "react-icons/fi";
import Photo from "@/components/Photo";

const Banner =() => {
    return (
        <>
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* heading*/}
                    {/* tagline*/}
                    <div className="flex flex-col justify-center items-center my-5 md:mt-0 md:items-start xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Welcome</span>
                        <h1 className="h1 mb-6">Try to Rent <span className="text-accent">anything</span> </h1>
                        <p className="max-w-[500px] flex mb-9 text-white/80">
                            You are the Owner of Car, Bike or E-bike and have no use. Come to us to Rent your vehicle and earn some money
                            <GiReceiveMoney className="text-5xl text-accent animate-bounce" />
                        </p>
                        <div className="flex gap-8 items-center">
                            <Button asChild className="bg-accent rounded-full hover:scale-125 hover:shadow-xl hover:bg-accent-hover transition-all">
                                <Link href={"/"}>Rent a Vehicle</Link>
                            </Button>
                            <Button asChild variant="outline" className="capitalize border-accent text-accent rounded-full group hover:scale-125 hover:bg-accent-hover hover:text-primary transition-all">
                                <Link href={"#"}> <span>Get started</span><FiArrowRight className="mx-2 group-hover:text-white"/></Link>
                            </Button>
                        </div>

                    </div>
                    {/* image*/}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0 relative">
                        <Photo/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
