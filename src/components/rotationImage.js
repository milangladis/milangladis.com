import { useEffect, useState, useRef } from 'react';
import Image from 'next/image'

export default function RotationImage({children, ...props}) {
  const elementRef = useRef()

  const [gazePosition, setGazePosition] = useState({x: 0, y:0, opacity: 0})
  const videoRef = useRef(null)

  useEffect(() => {
    if (elementRef.current) {

      const tiltEffectSettings = {
        max: props.maxTilt || 5,
        perspective: 500,
        scale: 1.05,
        speed: 500,
        easing: "cubic-bezier(.03,.98,.52,.99)"
      };
      
      elementRef.current.addEventListener("mouseenter", cardMouseEnter);
      elementRef.current.addEventListener("mousemove", cardMouseMove);
      elementRef.current.addEventListener("mouseleave", cardMouseLeave);
      
      function cardMouseEnter(event) {
        setTransition();
        setGazePosition({
          opacity: 1
        })
      }
      
      function cardMouseMove(event) {
        const cardRect = elementRef.current.getBoundingClientRect();
        const cardWidth = elementRef.current.offsetWidth;
        const cardHeight = elementRef.current.offsetHeight;
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;
        const rotateXUncapped = (+1)*(tiltEffectSettings.max*mouseY/(cardHeight/2));
        const rotateYUncapped = (-1)*(tiltEffectSettings.max*mouseX/(cardWidth/2));
        const rotateX = rotateXUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : (rotateXUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateXUncapped);
        const rotateY = rotateYUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : (rotateYUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateYUncapped);
      
        setGazePosition({
          x: event.clientX - cardRect.left - 48,
          y: event.clientY - cardRect.top - 48
        })
        // console.log(gazePosition)

        elementRef.current.style.transform = `
          perspective(${tiltEffectSettings.perspective}px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
      }
      
      function cardMouseLeave(event) {
        elementRef.current.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        setTransition();
        setGazePosition({
          opacity: 0
        })
      }
      
      function setTransition() {
        clearTimeout(elementRef.current.transitionTimeoutId);
        elementRef.current.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
        elementRef.current.transitionTimeoutId = setTimeout(() => {
          elementRef.current.style.transition = "";
        }, tiltEffectSettings.speed);
      }
    }

  }, [])

  useEffect(() =>{
    if (props.type === "video") {
      console.log('videooooo')
      videoRef.current.play()
    }
  })

  return (
  <div className={`relative group ${props.parentClass}`}>
      <div style={{ transform: `translate(${gazePosition.x}px, ${gazePosition.y}px)`, opacity: gazePosition.opacity }} className="absolute block w-96 h-96 rounded-full z-50 bg-white blur-3xl pointer-events-none transition-opacity opacity-50"></div>
      <div className={`${typeof !props.cursor && 'cursor-none'} ${props.type !== "content" ? "before:content-[`&nbsp;`] before:absolute before:bg-grey before:rounded-16 before:-left-16 before:-bottom-16 before:top-16 before:w-full" : 'inline-block flex-1'} `}>
        <div className="relative" ref={elementRef}>
          {/* <div className="absolute top-full mt-8 left-0 w-full text-center z-10 pointer-events-none text-12 opacity-0 group-hover:opacity-100 transition">Admix</div> */}

          {(props.type === "video") && 
            <video className={`portfolioVideo rounded-16 object-cover aspect-[${props.width}/${props.height}]`} ref={videoRef} width={props.width} height={props.height} src="http://localhost:3000/images/portfolio/vectary-video.mp4" controls={false} autoPlay={true} />
          }

          {(props.type === "image") && 
            <Image
              draggable="false" 
              {...props} 
              src={props.src}
              alt=""
              className="relative block rounded-16 z-0 w-full"
            />
          }


          {props.type === "content" &&
            <div src={props.src}>
              {children}
            </div>
          }


        </div>
      </div>
    </div>
  )
}
