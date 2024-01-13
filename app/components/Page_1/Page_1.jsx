import React from 'react'
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { motion } from 'framer-motion'

// gsap.registerPlugin(ScrollTrigger);

const Page_1 = () => {

//   useGSAP(()=>{
//     var tl = gsap.timeline()
//     tl.from('.page1>h1 , .page1.span',{
//      x:-500,
//      opacity:0,
//      duration:1.5,
//      delay:.4,
//      stagger:.3,
//      scrollTrigger:{
//        trigger:".page1",
//            srcoller:"body",
//            markers:true,
//            start:"top 50%",
//            end:"top -200%",
//            scrub:2,
           
//      }
//     })
// })


  return (
    
        <motion.div 
        className='bg-black text-white h-[20vw] flex justify-between items-center page1 '>
       <motion.h1  initial={{opacity:0, x:-500}} whileInView={{opacity:1,x:0}} transition={{duration:1.5}} className='font-medium text-[3.2vw] mes ml-4'> We are Steve Edge Design. <br /> A global brand & digital design agency.</motion.h1>
       <motion.span initial={{opacity:0, y: 200}} whileInView={{opacity:1,y:0}} transition={{duration:1.4}} className='mr-4 mes'>Read More</motion.span>
        </motion.div>
  )
}

export default Page_1