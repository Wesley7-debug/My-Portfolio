"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react"


const Email = () => {
 const marqueeRef = useRef(null);

 useEffect(() => {
const ctx = gsap.context (() =>{
    gsap.to(".marquee",{
        xPercent:-100,
        repeat:-1,
        duration:5,
        ease:"linear"
    })
})
 
   return () => {
   ctx.kill()
   }
 }, [])
 


  return (
   <section className="w-screen h-auto overflow-hidden py-4 mt-8">
    <div className="flex w-max flex-auto">
    <div className="flex items-center shrink-0 px-1 cursor-pointer">
    <h1
    ref={marqueeRef}
    className=" marquee text-5xl font-bold lg:text-8xl">Let's work together 
    <span className="text-bg bg-black inline-block cursor-pointer ">
      <a href="mailto:eugenefidelis573@gmail.com"></a>EMAIL ME</span>*</h1>
    </div>
    <div className="flex items-center shrink-0 px-1 cursor-pointer">
    <h1
    ref={marqueeRef}
    className=" marquee text-5xl font-bold lg:text-8xl">Let's work together 
    <span className="text-bg bg-black inline-block cursor-pointer ">
      <a href="mailto:eugenefidelis573@gmail.com"></a>EMAIL ME</span>*</h1>
    </div>
    <div className="flex items-center shrink-0 px-1 cursor-pointer">
    <h1
    ref={marqueeRef}
    className=" marquee text-5xl font-bold lg:text-8xl">Let's work together 
    <span className="text-bg bg-black inline-block cursor-pointer ">
      <a href="mailto:eugenefidelis573@gmail.com"></a>EMAIL ME</span>*</h1>
    </div>
    <div className="flex items-center shrink-0 px-1 cursor-pointer">
    <h1
    ref={marqueeRef}
    className=" marquee text-5xl font-bold lg:text-8xl">Let's work together 
    <span className="text-bg bg-black inline-block cursor-pointer ">
      <a href="mailto:eugenefidelis573@gmail.com"></a>EMAIL ME</span>*</h1>
    </div>
    <div className="flex items-center shrink-0 px-1 cursor-pointer">
    <h1
    ref={marqueeRef}
    className=" marquee text-5xl font-bold lg:text-8xl">Let's work together 
    <span className="text-bg bg-black inline-block cursor-pointer ">
      <a href="mailto:eugenefidelis573@gmail.com"></a>EMAIL ME</span>*</h1>
    </div>
    <div className="flex items-center shrink-0 px-1 cursor-pointer">
    <h1
    ref={marqueeRef}
    className=" marquee text-5xl font-bold lg:text-8xl">Let's work together 
    <span className="text-bg bg-black inline-block cursor-pointer ">
      <a href="mailto:eugenefidelis573@gmail.com"></a>EMAIL ME</span>*</h1>
    </div>
    <div className="flex items-center shrink-0 px-1 cursor-pointer">
    <h1
    ref={marqueeRef}
    className=" marquee text-5xl font-bold lg:text-8xl">Let's work together 
    <span className="text-bg bg-black inline-block cursor-pointer ">
      <a href="mailto:eugenefidelis573@gmail.com"></a>EMAIL ME</span>*</h1>
    </div>
  
   
    </div>

   </section>
  )
}

export default Email