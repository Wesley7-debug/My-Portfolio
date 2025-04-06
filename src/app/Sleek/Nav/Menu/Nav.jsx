"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Nav = ({handleClick}) => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.set(navRef.current,{y:-100})
  
    gsap.to(navRef.current,{
      y:0,
      duration:1,
      delay:0.015,
      ease:"power4.inOut",
    })
 
  }, [])
  



  return (
    <div
    ref={navRef}
    className='sticky top-0 bg-bg bg-[url(/bg-texture.webp)] w-full flex justify-around
     border-b p-2 '>
      <div className="mr-1 border-r ">
      <div className='text-[5vw] '>
<h1 className="font-extrabold inline-block relative pr-2">F 
 </h1>
</div>
      </div>


    <div className='text-center uppercase font-uniFract text-[5vw]  whitespace-nowrap px-3'>
    THE FULLSTACK TIMES
  
</div>


<div 
onClick={handleClick}
className="border-l relative p-5 w-fit cursor-pointer"> 
  
<div 

className="size-5 lg:size-10 absolute bottom-0">
  <img 
  className="w-full h-full object-cover"
  src="/images/inkpot.png" alt="" />
</div>
<div className="size-8 lg:size-30 absolute top-0  lg:left-1.5 -z-1  ">
  <img 
  className="w-full h-full object-cover"
  src="/images/Quil.png" alt="" />
</div>
</div>

    </div>
  )
}

export default Nav