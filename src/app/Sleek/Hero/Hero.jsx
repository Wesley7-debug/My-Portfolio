"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import SplitType from "split-type";


const Hero = () => {
const HeroRef = useRef(null);
const imageRef = useRef(null);
const fidelis1Ref = useRef(null);
const fidelis2Ref = useRef(null);



useEffect(() => {

    gsap.set(HeroRef.current,{rotateX:1.5,scale:0});
gsap.set(imageRef.current,{clipPath: "polygon(100% 0% , 100% 0%, 100% 100%, 100% 100%)"})

    const slittxt = new SplitType ('.arrested',{
        types: "chars,lines,words"
    })
    const spittxt = new SplitType ('.info',{
        types: "chars,lines,words"
    })
 
    const ctx = gsap.context(() =>{

        gsap.to(fidelis1Ref.current,{
            y:0,
            duration:1,
            ease:"power2.in",
            delay:0.035
        })

        gsap.to(HeroRef.current,{
            scale:1,
            rotateX:0,
            duration:1,
            ease:"power4.inOut",
        })
 
        gsap.from(slittxt.words,{
            y:100,
            stagger:0.025,
            opacity:0,
            duration:0.8,
            ease:"power4.out",
        })
        gsap.from(spittxt.lines,{
            y:100,
            stagger:0.025,
            opacity:0,
            delay:0.025,
            duration:0.8,
            ease:"power4.out",
        })
        gsap.to(imageRef.current,{
            clipPath: "polygon(0% 100% , 100% 100%, 100% 0%, 0% 0%)",
            duration:1,
            delay:0.035,
            ease:"power2.inOut",
        })
    })

  return () => {
    
  }
}, [])







  return (
<section 

className="w-screen h-auto overflow-y-hidden bg-[url(/bg-texture.webp)] text-center bg-bg">
<div className=" p-4  ">
    <h1
    ref={HeroRef}
    //ref={fidelis1Ref}
     className="text-7xl lg:text-9xl font-gothic font-extrabold text-bg bg-black
     inline-block ">FIDELIS NEWS</h1>
</div>
<div className="block lg:flex py-4">


    <div className=" arrested w-full lg:w-1/2  border-r border-border" >
        <div className="py-3 px-4 flex flex-col justify-center items-center  ">
<div className="text-6xl font-extrabold md:text-center lg:text-8xl  p-2">
    <h1
 
    >BREAKING NEWS</h1>
</div>
<div className="text-[2.1rem] lg:text-6xl P-4 font-bold ">
    <h2>THE CRAZY CREATIVE DEVELOPER FINALLY CAUGHT !</h2>
</div>
<div  className=" text-2xl lg:text-5xl p-3 lg:p-5 w-full ">
    <p>Eugene Fidelis was caught and arrested yesterday at exactly 6:45PM living with his mum .
         Authorities has reported that he was seen writing clean codes.
        witnesses reports that his creativity was just<br /><span className="font-bold">"dangerous to ignore"</span>
    </p>
  
</div>
        </div>
    </div>
    <div className="
    w-full lg:w-1/2 border-border ">
        <div className="p-4 flex flex-col justify-center items-center">
            <div 
            ref={imageRef}
            className="hero-img lg:w-[700px] lg:h-[550px] border-4 border-border  rounded-lg">
                <img 
                className=" w-full h-full object-cover"
                src="/images/vintage1.png" alt="3d image of fidelis" />
            </div>
            <div 
            ref={fidelis2Ref}
            className=" info P-3 text-4xl lg:text-6xl font-bold w-full">
                <h1>INTERACTIVE 3D FULLSTACK WEB DEVELOPER BASED IN PH, NIGERIA!</h1>
            </div>
        </div>
    </div>
</div>

</section>
  )
}

export default Hero