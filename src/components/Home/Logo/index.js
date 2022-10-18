import './index.scss'
import LogoS from '../../../assets/img/k.svg'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();
  useEffect(()=>{
    gsap.registerPlugin(DrawSVGPlugin);
    gsap.timeline().to(bgRef.current,{
        duration:1,
        opacity:1
    })
    gsap.fromTo(
        solidLogoRef.current,{
            opacity:0
        },{
            opacity:1,
            delay:4,
            duration:4
        }
    )
    gsap.fromTo(
      outlineLogoRef.current,{
        opacity:0
      },{
        opacity:1,
        delay:1,
        duration:2
      }
    )
  },[]);
  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="K" />
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512.000000 512.000000"
        width="559pt" 
        height="897pt"
         preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0 457) scale(.1 -.1)"
          fill="none" stroke='#ffd700'
        >
          <path ref={outlineLogoRef}
            d="M250 2560 l0 -2560 620 0 620 0 0 778 1 777 287 300 c157 165 289
301 292 302 3 1 279 -484 615 -1077 l610 -1080 789 0 788 0 -16 25 c-9 14
-444 705 -967 1537 l-951 1511 45 46 c24 25 454 486 956 1024 l911 977 -839 0
-839 0 -839 -946 -838 -945 -3 945 -2 946 -620 0 -620 0 0 -2560z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
