'use client'
import React, {useState, useEffect} from 'react'

const Nav = () => {
 
 
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) { 
      setShow(false); 
    } else { 
      setShow(true);  
    }
    
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
  

  return (
    <div className={`active ${show && 'hidden'}  can `}>
        <div className='flex items-center gap-[38vw] text-white h-[4vw] '>
        <h1 className='font-semibold text-[2vw] ml-2'>S.R</h1>
        <div className='font-medium text-[1.5vw] flex gap-2'> <h1>STEVE</h1> <h1>EDGE</h1>  <h1>DESIGN</h1> </div>
        <span>Contact</span></div>
    </div>
  )
}

export default Nav