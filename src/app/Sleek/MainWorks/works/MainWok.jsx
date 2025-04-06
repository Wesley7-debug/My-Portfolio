"use client";
import { GoArrowLeft, GoArrowRight, IconName } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import workData from "./WorkData";
import gsap from "gsap";
import "./work.css";





const MainWork = () => {

  const [currentIndex, setcurrentIndex] = useState(1);
  const totalSlide = workData.length;
  const marqueeRef = useRef(null);
  const marqueeReff = useRef(null);
 


  const updateAnim= ()=>{

    gsap.from('.imgs',{
      clipPath: "polygon(100% 0% , 100% 0%, 100% 100%, 0% 100%)",
      duration:1,
      ease:"power2.inOut",
    })
  
  }


  useEffect(() => {


    gsap.to(marqueeRef.current,{
      xPercent:-100,
      repeat:-1,
      yoyo:true,
      duration:5,
      ease:"linear"
    })
 
    


 
  }, [currentIndex]);



  const nextSlide = () =>{
    if (currentIndex < totalSlide) {
      setcurrentIndex( currentIndex + 1);
      updateAnim(currentIndex)

    }

  }
  const prevSlide = () =>{
    if (currentIndex > 1) {
      setcurrentIndex( currentIndex - 1);
      updateAnim(currentIndex)
    }
     
  }
  

  const slideNo = (slideNumber) =>{

    const work = workData[slideNumber - 1];
    return(
  <div className="relative w-full h-full z-10 mt-4 lg:mt-0 overflow-hidden">
<div className=" absolute top-[78%] left-[34%] ">
<div className="text-xl lg:text-2xl font-extrabold uppercase"><h1>{work.name}</h1></div>
    <div className="text-lg lg:text-xl "><p> <a href={work.link} target="blank">view site</a></p></div>
  </div>
    
</div>
    )
  }

  const marqueeImg =(slideNumber) =>{
    const work = workData[slideNumber - 1]





 



    
    return(
      <div>
        
        <div 
        ref={marqueeReff}

        className="  marquee-wrapper t-1 absolute top-0% left-0 w-full h-full 
          "
    
         >
          
          <h1
       
          className="clip-marquee 
          absolute top-1/2 left-0 -translate-1/2 text-center w-full
           text-[240px] font-bold whitespace-nowrap "
         
          >
           {work.name}*{work.name}*{work.name}*</h1>
    
        </div>
        <div className="modal absolute top-1/2 left-1/2 -translate-1/2 w-[300px] h-[400px]
         lg:w-[500px] lg:h-[700px] ">
        <div className="modal-img w-full h-[400px] lg:h-[600px] ">

          <div className=" absolute w-full h-[400px] lg:h-[600px] rounded-lg border-4">
          <img
        id="t-1"
        className=" imgs w-full h-full object-cover"
        src={work.img} alt={work.name}
        
        />
          </div>
    
        </div>
   
        </div>
      </div>
    )
  }


  return(
<section className="body w-screen h-screen overflow-hidden   ">
<div

className="overlay absolute w-full h-full left-0
 bg-bg bg-[url(/bg-texture.webp)]  z-100 ">

{marqueeImg (currentIndex)}
{slideNo(currentIndex)}
<div

className="absolute top-0 mt-10 p-4 w-full z-20">
<div className="flex justify-around text-2xl lg:text-4xl ">

  <div 
  onClick={prevSlide}
  className="cursor-pointer border-4 rounded-full p-1 lg:p-2 ">
    <p ><GoArrowLeft /></p>
  </div>
  <div
onClick={nextSlide}
className="cursor-pointer border-4 rounded-full p-1 lg:p-2">
    <p><GoArrowRight /></p>
  </div>
</div>

</div>
<div className="absolute bottom-10 right-10 ">
<h1 className="text-3xl lg:text-4xl font-extrabold">0{currentIndex} / 0{totalSlide}</h1>
</div>
</div>
</section>
  )
  
}

export default MainWork 