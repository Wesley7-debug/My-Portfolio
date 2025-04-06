import Bento1 from "./Bentos/Bento1"
import Bento2 from "./Bentos/Bento2"
import Bento3 from "./Bentos/Bento3"


const CaseStudy = () => {
  return (
 <section className="w-screen h-auto border-3 p-2 my-10 ">
<div className="grid grid-cols-12 p-2 gap-3">
<Bento1/>
<Bento2/>
<Bento3/>

</div>
 </section>
  )
}

export default CaseStudy