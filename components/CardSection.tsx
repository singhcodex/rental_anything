
import { TabsContent, Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { LuCar} from "react-icons/lu";
import {MdOutlineElectricBike} from "react-icons/md";
import {TbMotorbike} from "react-icons/tb";
import Image from "next/image";
import {FaCar} from "react-icons/fa";

const CardSection = () =>{
    return (
        <div className="flex flex-row gap-3 justify-between items-center bg-[#27272c] rounded-lg relative">
            <Tabs defaultValue="car" className="container mx-auto">
                <TabsList className="flex justify-center items-center py-10">
                    <TabsTrigger value="car" className="hover:text-accent">
                        <LuCar className="text-5xl"/>
                    </TabsTrigger>
                    <TabsTrigger value="bike" className="hover:text-accent">
                        <TbMotorbike className="text-5xl"/>
                    </TabsTrigger>
                    <TabsTrigger value="ebike" className="hover:text-accent">
                        <MdOutlineElectricBike className="text-5xl"/>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="car" className="relative py-10">
                    <div className="flex flex-col justify-between md:flex-row order">
                        <div className="max-w-[524px] order-2 md:order-none">
                            <h2 className="h2 my-4">Renting your Car </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur, debitis esse exercitationem expedita ipsum itaque nemo odit quia repellat</p>
                            <li>
                                <ol>comfortable an</ol>
                            </li>
                        </div>
                       <div className="order-1 md:order-none">
                           <div className="">
                            <img src="/assets/car_01.jpg" className="w-[324px] h-[324px] mix-blend-overlay"/>
                           </div>
                       </div>
                    </div>
                </TabsContent>
                <TabsContent value="bike">
                    <div className="flex flex-col justify-between md:flex-row order">
                        <div className="max-w-[524px] order-2 md:order-none">
                            <h2 className="h2 my-4">Have Bike to rent </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur, debitis esse exercitationem expedita ipsum itaque nemo odit quia repellat</p>
                            <li>
                                <ol>comfortable an</ol>
                            </li>
                        </div>
                        <div className="order-1 md:order-none">
                            <div className="">
                                <img src="/assets/car_01.jpg" className="w-[324px] h-[324px] mix-blend-overlay"/>
                            </div>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="ebike">
                    <div className="flex flex-col justify-between md:flex-row order">
                        <div className="max-w-[524px] order-2 md:order-none">
                            <h2 className="h2 my-4">Earn with your E-bike</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur, debitis esse exercitationem expedita ipsum itaque nemo odit quia repellat</p>
                            <li>
                                <ol>comfortable an</ol>
                            </li>
                        </div>
                        <div className="order-1 md:order-none">
                            <div className="">
                                <img src="/assets/car_01.jpg" className="w-[324px] h-[324px] mix-blend-overlay"/>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default CardSection;