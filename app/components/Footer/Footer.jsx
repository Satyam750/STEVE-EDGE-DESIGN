import React from "react";
import {motion} from "framer-motion"
import Image from "next/image";
import img from "../../../malpani/steve-edge-footer-logo.avif"

const Footer = () => {
    return (
        <div className="text-white mt-[5vw] ml-4 mr-4 flex justify-between h-[90vh]">
            <div className="flex flex-col">
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}  className="btn hover:text-gray-300">Facebook</motion.button>
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}  className="btn ml-[-2.5vw] hover:text-gray-300">Twitter</motion.button>
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}  className="btn hover:text-gray-300">Instagram</motion.button>
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}  className="btn ml-[-2.1vw] hover:text-gray-300">Youtube</motion.button>
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}  className="btn ml-[-2vw] hover:text-gray-300">Linkedin</motion.button>
                 <Image className="mt-[9vw] h-[10vw] w-[10vw]" src={img}/>
            </div>
            <div className="flex flex-col gap-20 ">
                <div className="flex flex-col">
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}  className="btn hover:text-gray-300"> Careers</motion.button>
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}  className="btn ml-[-2.5vw] hover:text-gray-300 ">Shop</motion.button>
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}  className="btn hover:text-gray-300">Sign Up</motion.button>
                </div>
                <span className="text-sm mt-[17vw]">© Steve Edge Design 2024 | Privacy</span>
            </div>
            <div className="flex flex-col gap-[4vw]">
                <div className="">
                <h2 className="text-[2.2vw]">London Studio</h2>
                <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}  className="btn hover:text-purple-600">2 Hoxton Street, <br />London N1 6NG</motion.button>
                </div>
                <div>
                    <h2 className="text-[2.2vw]">Midlands Studio</h2>
                    <motion.button whileHover={{ scale: 1.1, x:-30 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}  className="btn hover:text-red-600">The Chubb Buildings,Fryer <br />Wolverhampton WV1 1HT</motion.button>
                </div>
                <div className="flex flex-col ml-[-2vw]">
                    <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}  className="btn ml-[-3vw] hover:text-gray-300">+44 (0)207 613 5100</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}  className="btn hover:text-gray-300">hello@steve-edge.com</motion.button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
