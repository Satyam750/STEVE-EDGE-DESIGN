import React from 'react'
import Image from 'next/image'
import im1 from '../../../malpani/the-otto-real-estate-featured.avif'
import im2 from '../../../malpani/luxury-branding-agency-featured.avif'
import im3 from '../../../malpani/cast-digital-branding-featured.avif'
import im4 from '../../../malpani/hospitality-and-leisure-branding-agency-featured.avif'
import im1_hover from '../../../malpani/real-estate-motion.gif'
import im2_hover from '../../../malpani/luxury-hover.gif'
import im3_hover from '../../../malpani/professional-services-hover.gif'
import im4_hover from '../../../malpani/hospitality-hover.gif'
import {motion} from "framer-motion"
const Featured = () => {
  return (
    <div className='bg-black text-white mes ml-4 mr-4'>
    <div className='flex justify-between  mb-[2vw]'> <motion.h1 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1.1}} className='font-medium text-[2.4vw]'>Latest Work</motion.h1>
     <motion.p initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={{duration:1.1}} className='text-[1.5vw]'>All Projects</motion.p>
    </div>
    <div className='flex  gap-10'>
        <motion.div initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} transition={{duration:1.1, delay:0.2}} className=''>
        <Image className='h-[29vw] w-[47vw] static'  src={im1}/>
        <Image className='h-[29vw] w-[47vw]'  src={im1_hover}/>
        <motion.h1 whileHover={{ scale: 1.03, x:2 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}  className='font-medium text-[3.3vw] mt-3 hover:text-gray-300 cursor-pointer inline-block'>Real Estate</motion.h1>
        </motion.div>
        <motion.div initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} transition={{duration:1.1, delay:0.8}}>
        <Image className='h-[29vw] w-[47vw] static'  src={im2}/>
        <Image className='h-[29vw] w-[47vw]'  src={im2_hover}/>
        <motion.h1 whileHover={{ scale: 1.03, x:2 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}  className='font-medium text-[3.3vw] mt-3 hover:text-gray-300 cursor-pointer inline-block'>Luxury</motion.h1>
        </motion.div>
    </div>
    <div className='flex  gap-10 mt-20'>
        <motion.div initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} transition={{duration:1.1, delay:0.4}} className=''>
        <Image className='h-[29vw] w-[47vw] static'  src={im3}/>
        <Image className='h-[29vw] w-[47vw]'  src={im3_hover}/>
        <motion.h1 whileHover={{ scale: 1.03, x:2 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}  className='font-medium text-[3.3vw] mt-3 hover:text-gray-300 cursor-pointer inline-block'>Professional Services </motion.h1>
        </motion.div>
        <motion.div initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} transition={{duration:1.1, delay:0.9}}>
        <Image className='h-[29vw] w-[47vw] static'  src={im4}/>
        <Image className='h-[29vw] w-[47vw]'  src={im4_hover}/>
        <motion.h1 whileHover={{ scale: 1.03, x:2 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}  className='font-medium text-[3.3vw] mt-3 hover:text-gray-300 cursor-pointer inline-block'>Hospitality & Leisure</motion.h1>
        </motion.div>
    </div>

    <div className='flex justify-between mt-[10vw] '>
        <h1 className='font-medium text-[2.4vw] '>The Journal</h1>
        <button className='cursor-pointer  '>All Update</button>
    </div>
    
     
         
    </div>
  )
}

export default Featured