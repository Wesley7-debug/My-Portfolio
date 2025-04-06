import testimonialsData from "./testimonialData"



const Testimonials = () => {
  return (
   <section className="w-screen h-auto overflow-hidden relative my-10 ">
          <div className="p-2 text-center">
          <h1 className="text-center text-5xl lg:text-8xl font-extrabold ">"WORDS ON <br /> THE STREETS"</h1>
          </div>
      <div className="grid grid-cols-12 p-4 gap-7">
{testimonialsData.map(({name, role , description ,image ,stars}) => (
    <div
    key={name}
    className="col-span-12 lg:col-span-4 p-2 bg-bg rounded-lg border-border 
    border hover:bg-[#c9ac8e] hover:rotate-2 hover:scale-103  ">
<div className=" border-dashed border-2 p-3 rounded-lg ">
    <div>
        <div className="flex justify-between border border-border rounded-lg 
        ">
<div className="px-3 py-4 flex flex-col justify-between">
<h2 className="text-2xl lg:text-3xl font-bold">
{name}
</h2>
<h2 className="text-xl lg:text-2xl font-bold">{role}</h2>
</div>
<div className="w-50px h-50px mr-auto">
              <img 
              className="w-[250px] h-[250px] object-cover rounded-lg "
              src={image}  />
          </div>
        </div>
       

          <div  className="p-3 mt-7 rounded-lg border border-border text-center text-xl font-semibold ">
            <p>{description}</p>
          </div>
          <div className="flex justify-center items-center mt-3 gap-2 border rounded-lg">
<img 
className="w-10 "
src={stars} alt="" />
<img 
className="w-10 "
src={stars} alt="" />
<img 
className="w-10 "
src={stars} alt="" />
<img 
className="w-10 "
src={stars} alt="" />
<img 
className="w-10 "
src={stars} alt="" />


          </div>
    </div>


</div>
    </div>
))}
      </div>
     

   </section>
  )
}

export default Testimonials
