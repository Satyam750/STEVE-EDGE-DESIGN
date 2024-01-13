'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import im1 from "../../../malpani/steve-edge-design-nature-branding-thumb.avif"
import im2 from "../../../malpani/steve-edge-design-incrementalism-thumb.avif"

const Last = () => {
  const [isShown, setIsShown] = useState(false);
  const [isSecShow, setIsSecShow] = useState(false)
  
  return (
    <div className='mes text-white ml-4 mr-4 relative'>
    <hr />
    <div className='flex justify-between items-center pt-[2vw] pb-[2vw]'>
        <h1 onMouseEnter={() => setIsShown(true)} onMouseLeave={()=> setIsShown(false)} className='font-semibold text-[6vw] can hover:text-purple-600 hover:cursor-pointer inline'>Reflecting nature back into <br /> business</h1>
        <span className='mt-[-15vw]'>Read Artical</span>
    </div>
 
    {isShown && ( 
      <Image className='h-[30.5vw] w-[30vw] absolute left-[65vw] top-[10vw]' src={im1}/>
          )}
    <hr />
    <div className='flex justify-between items-center pt-[2vw] pb-[2vw]'>
    <span className='mt-[-15vw]'>Read Artical</span>
    <h1 onMouseEnter={() => setIsSecShow(true)} onMouseLeave={()=> setIsSecShow(false)} className='font-semibold text-[6vw] can hover:text-red-600 hover:cursor-pointer'>Feel at Home with your Brand: <br />
   <span className='ml-[7vw]'>A Case for Incrementalism</span>
    </h1>
    </div>
    {isSecShow && ( 
      <Image className='h-[30.5vw] w-[30vw] absolute left-[-1vw] top-[35vw]' src={im2}/>
          )}
    <hr />
    </div>
  )
}

export default Last