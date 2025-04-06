
"use client";

import useDragScroll from "@/Hooks/UseDrag";
import Left from "./Both/Left/Left";
import Right from "./Both/Right/Right";
import { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";



const DragWork = () => {


const dragRef = useDragScroll();
const starTref = useRef(null);

gsap.set(starTref.current,{xPercent:-100})

gsap.to(starTref.current,{
  xPercent:0,
  duration:1,
  ease:"power4.out",
  delay:0.025,
})



  return (

 <section
ref={ (el) =>{
  dragRef.current = el
  starTref.current= el
}
}

 className=' h-auto overflow-hidden mb-3 mt-5'>
<div className=' w-[300%] lg:w-[150%] border-3 border-border flex'>
<Left/>
<div className=" flex snap-center ">
<div className="flex flex-col justify-center items-center">
<div className="text-center p-2 ">
    <h1 className="text-2xl lg:text-5xl font-semibold">SELECTED <br />WORKS</h1>
</div>
<div className="font-semi-bold py-2 lg:p-5">
    <p className="text-md lg:text-lg text-center">Handpicked works from over the years of coding</p>
</div>
<div className=" cursor-pointer text-center text-sm lg:text-xl">
<p className="py-1 lg:py-4">
  <Link href='/Sleek/MainWorks'>
  <span className="font-bold text-red-800">TIP! </span>Clickto explore!
  </Link>


  </p>
</div>
        </div>

</div>
<Right/>
  
</div>
 </section>
  )
}

export default DragWork