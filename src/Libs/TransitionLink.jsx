import { Link, useTransitionRouter } from 'next-view-transitions'

const TransitionLink = ({href, child , ...props}) => {
    const router = useTransitionRouter();

    const slideinOut =() =>{
document.documentElement.animate([
  {
    opacity: 1,
    transform: "translateY(0)"

  },
  {
     opacity: 0.2,
    transform: "translateY(-35%)"
  },{
    duration:"1500",
    fill:"forwards",
    pseudoElement:"::view-transition-old(root)",
  }
]);
document.documentElement.animate([
  {
    clipPath :"polygon( 0% 100% , 100% 100%, 100% 100%, 0% 100%)"
  },{
    clipPath :"polygon( 0% 100% , 100% 100%, 100% 0%, 0% 0%)"
  },{
    duration:"1500",
    fill:"forwards",
    pseudoElement:"::view-transition-new(root)",
  }
])
    }

  return (
    <Link href={href} onClick={(e) => {
    
        e.preventDefault();
        router.push(href,{
          onTransitionReady: slideinOut,
        })
        
      }}>{child}</Link>
  )
}

export default TransitionLink