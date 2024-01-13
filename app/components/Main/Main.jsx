'use client';
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';


gsap.registerPlugin(ScrollTrigger);

const Main = () => {

  const mains = useRef()
   
  useGSAP(()=>{
         var tl = gsap.timeline()
         tl.from(mains.current,{
          x:-500,
          opacity:0,
          duration:1.5,
          delay:.4,
          // scrollTrigger:{
          //   trigger:mains.current,
          //       srcoller:"body",
          //       markers:true,
          //       // start:"top 50%",
          //       // // end:"top -200%",
          //       // scrub:2,
          //       // pin:true


          // }
         })
  })
    
  return (
   
    <div className='h-[100vh] '>
    <div className='absolute z-40 bottom-[10vw] '>
    <h1 ref={mains} className='font-extrabold text-[7vw] text-white can '>Global <br /> Branding Agency</h1> 
 
    </div>
    <video className='w-[100%] object-cover h-[100vh]' muted autoPlay loop src="https://cms.steve-edge.com/wp-content/uploads/2021/10/sed-video.mp4"></video>
    
    </div>
    

  )
}

export default Main