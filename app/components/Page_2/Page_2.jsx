import React from "react";
import { motion } from "framer-motion";
const Page_2 = () => {
    return (
        <div className="flex bg-black text-white">
            <div className=" mes w-[50%] mr-2 ml-4">
                <motion.h1 initial={{opacity:0, y:150}} whileInView={{opacity:1,y:0}} transition={{duration:1.1}}  className="font-medium text-[2vw] mb-2">About</motion.h1>
                <motion.p initial={{opacity:0, y:150}} whileInView={{opacity:1,y:0}} transition={{duration:1.1, delay:0.4}}  className="font-semibold text-[3.1vw]">
                    A lot’s changed since we started out in 1985. But our core beliefs
                    have held strong, underpinning everything we do – from the culture we
                    create to the brands we build.
                </motion.p>
            </div>

            <div className=" mes w-[50%]">
                <motion.h1 initial={{opacity:0, y:150}} whileInView={{opacity:1,y:0}} transition={{duration:1.1}}  className="font-medium text-[2vw] mb-2">Sectors</motion.h1>
               <motion.div initial={{opacity:0, y:150}} whileInView={{opacity:1,y:0}} transition={{duration:1.1, delay:0.4}}>
               <motion.button  whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="page_2_btn hover:text-gray-300">Real Estate</motion.button><br />
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="page_2_btn hover:text-gray-300">Hospitality & Leisure</motion.button><br />
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="page_2_btn hover:text-gray-300">Professional Services</motion.button><br />
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="page_2_btn hover:text-gray-300">Luxury</motion.button><br />
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="page_2_btn hover:text-gray-300">Healthcare</motion.button><br />
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="page_2_btn hover:text-gray-300">Technology</motion.button><br />
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="page_2_btn hover:text-gray-300">Retail</motion.button><br />
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="page_2_btn hover:text-gray-300">Design & Architecture</motion.button><br />
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="page_2_btn hover:text-gray-300">Banking & Finance</motion.button><br />
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="page_2_btn hover:text-gray-300">Sport</motion.button><br />
               </motion.div>

            </div>
        </div>

    );
};

export default Page_2;
