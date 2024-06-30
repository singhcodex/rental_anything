"use client"
import {motion} from "framer-motion";
import Banner from "@/components/Banner";
import CardSection from "@/components/CardSection";

export default function Home() {


  return (
    <motion.section
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition: {delay:1, duration:0.4, ease:"easeIn"},
        }} className="h-full">
        <Banner/>
        <CardSection />
    </motion.section>
  );
}
