"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { useEffect, useRef } from 'react';

const Menu = ({ismenuActive ,handleClick}) => {
const router = useRouter();
const imageRef = useRef(null);
    const bgOverlayRef = useRef(null);
    const col1ref = useRef(null);
    const col2ref = useRef(null);
    const textRef = useRef([]);
    const menuRef = useRef(null);
    const sideRef1 = useRef(null);
    const sideRef2 = useRef(null);
    const tl =useRef(null);


    useGSAP(() =>{
        gsap.set(imageRef.current,{rotate:2})
        gsap.set(bgOverlayRef.current,{ yPercent:-150})
  gsap.set(col1ref.current,{yPercent:-200});
  gsap.set(col2ref.current,{yPercent:-250});
  gsap.set(sideRef1.current,{xPercent:-100});
  gsap.set(sideRef2.current,{xPercent:100});
  gsap.set(col1ref.current,{yPercent:-100});
  gsap.set(menuRef.current,{yPercent:-150});
 gsap.set(textRef.current,{yPercent:-100});


  
  
        tl.current = gsap.timeline( {paused: true,
          defaults:{
              ease:"power4.inOut",
          }
        });

tl.current
.to(bgOverlayRef.current,{
    yPercent:0,
  
},'>')
.to(col1ref.current,{
    yPercent:0,

   
},'>')

.to(col2ref.current,{
    yPercent:0,
   
},"+=0.01")

.to(sideRef1.current,{
    xPercent:0,
    duration: 0.035,
    
},">")

.to(sideRef2.current,{
    xPercent:0,
    duration: 0.035,
},">")

.to(menuRef.current,{
    yPercent:0,
    duration: 0.025,
    delay:0.05
},"+=0.03")
.to( textRef.current,{
yPercent:0,
stagger:0.25,

})

    })

    useEffect(() => {
if (ismenuActive) {
    tl.current.play()
}
else{
    tl.current.reverse()
}
    }, [ismenuActive])
    




    


    

    

    const menuLink =[
        {
            name:"Headlines",
            href:"/"
        },
        {
            name:"Editorials",
            href:"/Sleek/MainAbout"
        },
        {
            name:"Archives",
            href:"/Sleek/MainWorks"
        },

    ]



  return (
 
    <div
    className='overlay  w-full h-full'>
        <div
         ref={bgOverlayRef}
        className='flex w-full h-full fixed top-0 left-0  text-middleline  z-990'>
            <div 
            ref={menuRef}

            onClick={handleClick}
            className='absolute top-4 left-1/2  -translate-x-1/2 z-99'> 
            <div className="size-16 lg:size-30 cursor-pointer  ">
  <img 
  className="w-full h-full object-cover"
  src="/images/Quil.png" alt="" />
</div>
</div>


<div
    ref={sideRef1}
    className='text-center bg-black hidden lg:flex  items-center justify-center flex-col'>
    <div className='-rotate-90 font-semibold'>
    <h1>FULLSTACK</h1>
    <h1>TIMES</h1>
    </div>
</div>

<div
ref={col1ref}
className='relative w-[45%] hidden lg:block border-l bg-black'>
<div className='absolute top-1/2 left-1/2 -translate-1/2'>
<div
ref={imageRef}
className='size-94 rounded-lg'>
<img src="/images/Transition/Trans-1.webp" alt="" />
</div>

</div>
</div>

<div
ref={col2ref}
className=' w-full border-r lg:w-1/2 relative text-center flex items-center 
justify-center flex-col  lg:text-[7vw] text-[13vw] p-4 uppercase bg-black'>

    <div>
    {menuLink.map(({name, href, index}) =>(
        <div
        onClick={handleClick}
        ref={(el) => {textRef[index] = el }}
        className=' py-2 '
        key={name}
        >
            <h1><Link
            onClick={(e) =>{ e.preventDefault()
    router.push(href)
            }}
            href={href}>{name}</Link></h1>
        </div>
    ))}


    <div className='text-lg lg:text-2xl flex flex-col items-center cursor-pointer absolute bottom-10 left-1/2 -translate-x-1/2'>
<div className='flex gap-2 items-center'>
    <h1>Linklden</h1>
    <h1>GitHub</h1>
    <h1>Instagram</h1>
</div>
    </div>
 
   
    </div>


</div>
<div 
    ref={sideRef2}
className='text-center hidden lg:flex   items-center justify-center flex-col bg-black  '>
    <div className='rotate-90 font-semibold'>
    <h1>FULLSTACK</h1>
    <h1>TIMES</h1>
    </div>

</div>
</div>



</div>


  )
}

export default Menu