import React from 'react'
import Image from 'next/image'
import forcia from "../../../malpani/forcia-branding-website-featured.avif"
import vita from "../../../malpani/vita-digital-branding-overseas.avif"
import { motion } from 'framer-motion'

const Works = () => {
  return (
    <div className='bg-black text-white mes'>
        <motion.div initial={{opacity:0, y:150}} whileInView={{opacity:1,y:0}} transition={{duration:1.1}} className='flex justify-between ml-4 mr-4 mb-[2vw]'> <h1 className='font-medium text-[2.4vw]'>Latest Work</h1>
         <p className='text-[1.5vw]'>All Projects</p>
        </motion.div>

        <div className='flex justify-between  ml-4 mr-4'>
            <motion.div initial={{opacity:0, x:-250}} whileInView={{opacity:1,x:0}} transition={{duration:1.1}}>
            <Image className='h-[38vw] w-[47vw]' src={forcia} />
             <motion.h1 whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className='font-semibold text-[3.4vw] hover:text-gray-300 cursor-pointer'>Forcia <br /> Shaping Places</motion.h1>
            </motion.div>
            <motion.div initial={{opacity:0, x:250}} whileInView={{opacity:1,x:0}} transition={{duration:1.1}}>
            <Image className='h-[38vw] w-[47vw]' src={vita} />
             <motion.h1 whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className='font-semibold text-[3.4vw] hover:text-gray-300 cursor-pointer'>Vita <br /> Inspired by tradition. <br /> Powered by electricity.</motion.h1> 
</motion.div>
        </div>
    </div>
  )
}

export default Works