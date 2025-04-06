"use client";
import { useRef, useState } from "react";
import Bentoui1 from "./BentoUi/Bentoui1";
import Bentoui2 from "./BentoUi/BentoUi2";
import BentoUi3 from "./BentoUi/BentoUi3";
import BentoUi4 from "./BentoUi/BentoUi4";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const MainAbout = () => {
const [isWeek, setisWeek] = useState(true)

const toggleWeek = () =>{setisWeek(!isWeek)}


useGSAP(()=>{
    gsap.set(".imgS",{clipPath: "polygon(100% 0% , 100% 0%, 100% 100%, 100% 100%)"})
    const sRittxt = new SplitType ('.aboutparA',{
        types: "chars,lines,words"
    })
    
    
    gsap.from(sRittxt.words,{
        y:100,
        stagger:0.025,
        opacity:0,
        duration:0.5,
        ease:"power4.out",
    })

    gsap.to(".imgS",{
        clipPath: "polygon(0% 100% , 100% 100%, 100% 0%, 0% 0%)",
        duration:1,
        delay:0.025,
        ease:"power2.inOut",
    })
})

  return (
<section className="w-screen h-auto overflow-hidden relative bg-bg bg-[url(/bg-texture.webp)] ">

<div className="text-center m-4 border-8">
    <h1 className="text-6xl lg:text-8xl font-extrabold" >FIDELIS JOURNAL</h1>
</div>
<div className="text-center border-b-8 p-2">
    <h2 className="text-4xl lg:text-6xl  p-4 border-t-4 ">FULL STACK 3D WEB DEVELOPER</h2>
    <h1 className="text-4xl lg:text-8xl font-bold border-b-4 ">EUGENE FIDELIS</h1>
</div>
<div className="flex flex-row justify-evenly text-lg lg:text-xl font-semibold border-b-5 py-2">
    <p> March 11, 2025  * </p>
     <p> Eugene Fidelis </p>
     <p>* 10.00pm</p>
</div>


<div className="block lg:flex overflow-hidden ">
<div className="px-2 w-full lg:w-[70%]">
    <div className="text-center text-3xl lg:text-5xl w-full">
        <p 
      
        className=" aboutparA leading-relaxed first-letter:text-8xl py-4
  first-letter:float-left first-letter:mr-3 first-letter:text-bg
  first-letter:bg-black first-letter: inline-block font-semibold">
  Im Eugene Fidelis, a passionate coder who started my programming journey in 2021, driven by a dream—to build a platform where people can buy and sell websites like digital real estate. This vision led me to web development, where I focus on building scalable applications and seamless user experiences.
   And I’m working on it.

Beyond coding, I enjoy chess for its strategy, classical music for inspiration,
 and anime for its storytelling. Im always learning, exploring connections between technology, art, and logic. My passion for software engineering fuels my drive to create impactful, efficient solutions in the ever-evolving tech world.


        </p>
    </div>
</div>
<div className="p-5 w-full lg:w-[40%] border-t-3 lg:border-t-3 lg:border-l-3 flex flex-col justify-center ">

<div className="border-5 rounded-lg h-180 w-auto bg-amber-100 py-3 px-3">
    <div className="border-5 rounded-lg h-160 w-auto bg-amber-200 flex justify-center ">
<img
className="imgS w-full imgS h-full object-cover"
src= {isWeek ? "/images/vintage_image_1.jpg" : "/images/vintage_image_2.jpg"} alt="" />
    </div>
    <div className="text-center p-2 text-xl lg:text-2xl font-bold text-red-700">
        <button 
        className="font-gothic  cursor-pointer  "
        onClick={toggleWeek }
        ><h1>{isWeek ? "WEEKDAYS" : "WEEKENDS"}</h1></button>
    </div>
</div>

<div className="m-2 aboutparA font-semibold text-center text-2xl lg:text-4xl overflow-hidden ">
    <p>
    I am all about crafting awesome digital experiences with the MERN stack MongoDB for data, Express for the backend, 
    React for sleek UIs, and Node.js to tie it all together. I also dive into Python and Django for backend magic, plus GSAP,
     Three.js,
     and Drei for smooth animations and 3D fun. Always learning, always building bring on the next challenge!
    </p>
</div>
</div>
</div>

<div className="border-3 rounded-lg p-2 grid grid-cols-12 gap-2 overflow-hidden">
 <Bentoui1/>
<Bentoui2/>
<BentoUi3/>
<BentoUi4/>
</div>
</section>
  )
}

export default MainAbout