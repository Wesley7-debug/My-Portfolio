"use client"
import  { useEffect, useRef, useState } from 'react'
import workData from './WorkData';
import{HiChevronDoubleRight} from 'react-icons/hi'
import gsap from 'gsap';


const MainWok = () => {
  const imageRef = useRef([]);
  const textRef = useRef([]);
  const buttonRef = useRef([]);
  const [Selected, setSelected] = useState(null);


useEffect(() => {
  if (Selected === null) return;

  const imgE = imageRef.current[Selected];
  const textE = textRef.current[Selected];
  const btnE = buttonRef.current[Selected];

  //sets all the elements
  gsap.set(imgE, {
    clipPath: "polygon(10% 0% , 100% 100%, 100% 100%, 100% 100%)" 
  });
  gsap.set(textE,{y:-100,
    opacity:0,
    

  })

  gsap.set(btnE,{y:100, opacity:0,})

  const tl = gsap.timeline ({paused:true})

  // Then animate to the final shape
  gsap.to(imgE, {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    duration: 1,
    ease: "sine.out"
  })

  // Animate text
  gsap.to(textE, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "sine.out"
  },"+=0.01")
  //animate the  button
  gsap.to(btnE,{
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "sine.out"
  },"+=0.02")

}, [Selected]); //  run this whenever `Selected` changes



//changes the index
  const handleClick =(index) =>{
    //console.log(index);
    if (Selected ===index) {
      setSelected(null) }
 else{ setSelected(index);  }}


  return (
    <section className='w-screen h-screen overflow-hidden p-2  bg-[url(/bg-texture.webp)] text-center bg-bg'>
<div className='w-full h-full overflow-hidden relative '>
  <div className={`absolute bottom-0 lg:top-0 lg:bottom-unset right-0 w-full
   ${Selected !== null ? "lg:w-full  h-[98%]"  : "lg:w-1/2 h-[50vw]"}   lg:h-full`}>
  <div className='w-full flex flex-col lg:flex-row justify-end h-full '>
  {workData.map(({name, img , link, color, id}, index) =>(
    <div   key={id}
    
    className='h-full flex flex-col lg:flex-row '
   >

  <div
 onClick={()=>handleClick(index)}
  className='h-full w-full lg:w-auto   lg:flex-col flex flex-row justify-around
  font-extrabold font-lora border-border border-2 bg-amber-50 bg-[url(/bg-texture.webp)]'>
 
    <div className='mr-[6em]  lg:mr-0 ml-2'>
    <p>{id}</p>
    </div>
    <div className=' text-center ml-[4em] lg:ml-0'>
    <h1 className='rotate-0 text-nowrap uppercase lg:rotate-90 text-2xl '>{name}</h1>
    </div>
 

    </div>

  
  {index === Selected && (
    <div>
<div className='  relative w-full lg:w-[56vw]  overflow-hidden h-[90vw] lg:h-full mr-1 '>
<div className='texts absolute z-2  top-3 right-2 text-xl lg:text-3xl font-extrabold uppercase text-bg'>
      <h1 style={{color}} ref={(el) => textRef.current[index] = el}>{name}</h1>
    </div>
    <div 
   ref={(el) => buttonRef.current[index] = el}
    className='absolute bottom-5 right-2 text-xl lg:text-4xl p-2 rounded-full
     border-border border-4 cursor-pointer   z-2 text-bg'>
      <a  style={{color}} href={link} target='_'><HiChevronDoubleRight/></a>
    
    </div>
  <img
  ref={(el) => imageRef.current[index] = el}
  className=' imgse w-full h-full object-cover will-change-auto 'src={img} alt={name}/>
    </div >

    </div>
  
  )}
  
  </div>
 
))}
     
     </div>
  </div>

</div>
    </section>
  )
}

export default MainWok