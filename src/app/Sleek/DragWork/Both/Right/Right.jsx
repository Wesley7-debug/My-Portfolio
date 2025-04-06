import React from 'react'
import RightData from './RightData'

const Right = () => {
  return (
    <div className=" flex w-fit">
<div className=' px-3 border-l border-border flex '> 


{RightData.map(({name, img}) =>(
  <div
  key={name}
  className='flex flex-col px-3'>
    <div>
      <img
 className="w-94  h-20 lg:h-30 object-cover"
src={img} alt={name} />
</div>
<div>
<h2 className="py-1 text-lg lg:text-xl font-bold">{name}</h2>
</div>
<p className="py-1 cursor-pointer text-sm lg:text-lg">

<span className="font-bold text-red-800">TIP! </span>Drag to view
</p>

</div>
))}


</div>
</div>
  )
}

export default Right