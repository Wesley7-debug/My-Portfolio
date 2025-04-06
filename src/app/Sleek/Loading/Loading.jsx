"use client";
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import "./loading.css";
import React, { useEffect, useRef, useState } from 'react';



const Loading = ({onFinish}) => {

const [isLoaded, setisLoaded] = useState(true);
const textt1Ref = useRef(null);
const overlayyRef = useRef(null)
const preloaderRef= useRef(null);
const imageRef = useRef([]);

  const cursorRef = useRef(null);

  const numbeRs =[ "01", , "48" , "76", "99"];


  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    gsap.to(cursorRef.current,{
      opacity:0,
      duration:0.5,
      ease:"back.out",
      repeat:-1,
      yoyo:true,
    });
    const tl = gsap.timeline({repeat:-1, repeatDelay:0.5,

    });

   tl.to(cursorRef.current,{
      opacity:0,
      duration:0.5,
      ease:"back.out",
      repeat:1,
      yoyo:true,
    });

    numbeRs.forEach((number)=>{
      tl.to(textt1Ref.current,{
        duration:0.8,
        text: number,
        ease:"power4.inOut",
        yoyo:true,
      })
      .to(textt1Ref.current,{
        duration:0.5,
        text:"",
        ease:"power4.inOut",
        yoyo:true,
    
      } ,"+=0.5")
    

     
    })
    tl.to(textt1Ref.current,{
      duration:0.5,
      text:numbeRs[numbeRs.length- 1],
      ease:"power4.inOut",
    })
    .to(cursorRef.current,{
      width:"30%",
      duration:2,
      delay:0.7,
      opacity:1,
      ease:"power4.inOut",
    },)
      .to(cursorRef.current,{
          width:"100%",
          opacity: 0,
     
          duration:1,
          ease:"power4.inOut",
          onComplete:() =>{
            gsap.to(textt1Ref.current,{
    xPercent:-100,
    opacity:0,
    ease:"power4.inOut",
    duration:0.56,
            })
            gsap.set(preloaderRef.current,{display:"none"})

          }
        

      
    })


  tl.to(imageRef.current,{
    clipPath:"polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    stagger:0.25,
    opacity:1,
    duration:1,
    ease:"power4.inOut",
  
onComplete:() =>{
  gsap.set(overlayyRef.current,{display:'none'})
  onFinish();
}
   })


    return () => {
     tl.kill()
    }
  }, [])
  
  return  (
    <div
    ref={overlayyRef}
    className=' body w-screen h-screen p-[1rem] overflow-hidden fixed top-0 left-0 z-100 '>
<div
ref={preloaderRef}
className =" overflow-hidden w-full h-full [perspective:1000px]  fixed top-0 right-0 z-2 gap-4 
 bg-white bg-[url(/bg-texture.webp)] flex  items-end justify-end">

<div 
ref={cursorRef}
className='w-6 lg:w-12 h-1 lg:h-1.5 rounded-lg bg-black mb-[8%] lg:mb-[6%] '></div>
<div

className='p-4 text-[12vw] font-bold flex font-uniFract'>
  <div
  ref={textt1Ref}
  ></div>

</div>
</div>




<div className=' relative w-full h-full overflow-hidden'>
  {[...Array(6)].map((_, i) =>(
 <div 
 key={i}

 className='imgs'>
      <img
       ref={(el) =>{ imageRef.current[i] = el}}
      className='img absolute w-full h-full object-cover'
       src= {`/images/Transition/Trans-${i + 1}.webp`}
       alt="" />
    </div>
  ))}
</div> 
    </div>


)}

export default Loading