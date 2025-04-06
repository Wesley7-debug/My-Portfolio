"use client";

import TransitionLink from "@/Libs/TransitionLink";


const SmallAbout = () => {
  return (
 <section className="w-screen h-auto overflow-hidden mb-7 p-3">

    <div className="text-6xl lg:text-9xl  font-gothic font-extrabold text-bg bg-black inline-block text-center">
        <h1>HEADLINES</h1>
    </div>
    <div className="block lg:flex">
<div className="w-full lg:w-[70%] border-b lg:border-b border-border px-3">
  <div className="flex py-10">
    <div className="border-r border-border px-3 relative">
      <h2 className="py-4 text-xl lg:text-2xl font-bold ">TOP OF THE PRESS</h2>
      <p className="text-xl font-semibold w-full">A bold new creation is brewing-served fresh and full of character</p>
      <p className=" absolute bottom-5"> <span className="font-bold text-red-800">TIP! {}</span>click to see more</p>
    </div>
    <div className="px-3">
 
      <img 
      className="w-94 h-30 object-cover"
      src="/images/sipra.png"
      alt="sipra" />
     
<div className="w-[100%] lg:w-[70%]">
  <h2 className="py-3 lg:text-2xl font-bold">SIPRA EXPERIENCE</h2>
  <p className="text-xl font-semibold"> Step into the world of Sipra,
    born from the world of fruit, sipra refreshes in every sip
  </p>
  <p className="py-4"><span className="font-bold text-red-800">TIP! </span>Tap the image to take a sip of nostalgia</p>
</div>
      
    </div>
  </div>
  <div className="w-[full] h-[70%]">
    <img
    className="w-full h-full"
    src="/images/vintage_image_2.jpg" alt="EUGENE FIDELIS IMAGE" />
  </div>
</div>

<div className="flex flex-col p-3 w-full lg:w-[30%]">
<h1 className="text-5xl py-7 lg:text-6xl text-center text-bg bg-black inline-block">INTERACTIVE DEVELOPER</h1>
<div className="relative h-full">
<div className="py-3 w-full ">
  <img 
  className="w-full h-full object-cover"
  src="/images/vintage_image_1.jpg" alt="" />
</div>
<div>
  <p className="text-xl lg:text-2xl leading-relaxed first-letter:text-8xl py-4
  first-letter:float-left first-letter:mr-3 first-letter:text-bg
  first-letter:bg-black first-letter: inline-block
  
  ">Bringing ideas into life with motion typography and craetive coding!
   I craft playful immersive website experiences that blends aesthetics with interactivity-turnig ordinary sites into engaging digital playgrounds
    for brands, agencies and curious minds worldwide.</p>

</div>
<div className="flex items-center justify-center mt-8">


<div className=" p-6  bottom-0  px-[20px] py-[40px] text-3xl
  border rounded-[50%] cursor-pointer inline-block"> 
 <h1 className="p-7  font-bold"> 
  <span>
<TransitionLink 
child={"ABOUT ME"}
href={"/Sleek/MainAbout"}/>

  </span>

      
        </h1>
        </div>




   
  
   
 

</div>

</div>

</div>

    </div>
 </section>
  )
}

export default SmallAbout