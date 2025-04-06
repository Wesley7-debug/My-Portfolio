import Link from "next/link"


const Bento2 = () => {
  return (
    <div className="col-span-12 lg:col-span-4   border-l border-r relative">
        <div className="flex flex-col justify-center items-center">
<div className="text-center p-3 ">
    <h1 className="text-4xl lg:text-7xl font-bold">SELECTED <br />WORKS</h1>
</div>
<div className="font-semi-bold p-3 lg:p-5">
    <p className="text-lg lg:2xl text-center">Handpicked works from over the years of coding</p>
</div>
<div className=" cursor-pointer">
<p className="py-4">
<Link href='/Sleek/MainWorks'>
<span className="font-bold text-red-800">TIP! </span>click to view ARCHIVE
</Link> </p>
</div>
        </div>
    </div>
  )
}

export default Bento2