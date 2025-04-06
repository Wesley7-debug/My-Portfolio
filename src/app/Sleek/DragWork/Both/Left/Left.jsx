import leftData from "./LeftData";


const Left = () => {
  return (
<div className="w-fit flex">
<div className=' px-3 border-r border-border flex '> 


{leftData.map(({name, img}) =>(
  <div
  key={name}
  className='flex flex-col px-1'>
    <div>
      <img
 className="w-94 h-20 lg:h-30 object-cover"
src={img} alt={name} />
</div>
<div>
<h2 className="py-1 text-lg lg:text-xl font-bold ">{name}</h2>
</div>
<p className="py-1 cursor-pointer text-sm lg:text-lg"> 
   <span className="font-bold text-red-800">TIP! </span>drag to view
 </p>

</div>
))}


</div>
</div>
  )
}

export default Left