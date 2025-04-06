"use client";
import SmallAbout from "./SmallAbout/SmallAbout";
import Hero from "./Hero/Hero";
import DragWork from "./DragWork/DragWork";
import CaseStudy from "./CaseStudies/CaseStudy";
import Testimonials from "./Testimonials/Testimonials";
import Email from "./email/Email";
import NavBoth from "./Nav/NavBoth";
import Footer from "./Footer/Footer";












const Sleek = () => {
  return (
    <div className=" bg-bg bg-[url(/bg-texture.webp)] 
    overflow-hidden" >      
 <DragWork/>
 <Hero/>
 <SmallAbout/>
 <CaseStudy/>
 <Testimonials/>
 <Email/>
<Footer/>
 </div>

)
}

export default Sleek