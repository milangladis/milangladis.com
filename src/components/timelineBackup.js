import { useRef, useEffect, useState } from "react"


export default function Timeline(){
  const timelineRef = useRef()

  const [statewidth, setStatewidth] = useState(0)

  
  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.addEventListener("mouseenter", cardMouseEnter);
      timelineRef.current.addEventListener("mousemove", cardMouseMove);
      timelineRef.current.addEventListener("mouseleave", cardMouseLeave);

      function cardMouseEnter(event) {}

      function cardMouseMove(event) {
        const cardRect = timelineRef.current.getBoundingClientRect();
        const cardWidth = timelineRef.current.offsetWidth;
        const cardHeight = timelineRef.current.offsetHeight;
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const mouseX = event.clientX - centerX;
        let mousePosition = 0;
        console.log(cardRect.width)
        mousePosition = event.clientX - cardRect.left - 48;
        if (mousePosition !== "undefined") {
          console.log(mousePosition)
          if ((mousePosition >= 0) && (mousePosition <= cardRect.width - 200)) {
            setStatewidth(mousePosition)
          }
        }
      }

      function cardMouseLeave(event) {}
    }
  })
  return(
    <div ref={timelineRef} className="timeline group hover:bg-grey hover:cursor-none transition rounded-16 p-48 relative h-96">
      <div className="relative h-2 w-full bg-grey-darken top-1/2 group-hover:bg-white transition">
        <div className="mb-24 absolute bottom-1/2 pointer-events-none transition" style={{left : statewidth}}>
          <div className="text-16 font-semibold mb-8">Web Designer & Developer</div>
          <div className="opacity-50">Freelancer</div>
        </div>
        <div className="h-24 w-96 bg-black rounded-full absolute -top-12 z-10 text-white flex items-center justify-center transition" style={{left : statewidth}}>{statewidth}</div>
        <div className="absolute -top-[10px] left-12 px-4 bg-white group-hover:bg-grey transition">2006</div>
        <div className="w-8 h-8 rounded-full bg-grey-darken absolute ring-2 ring-white -top-[3px] -left-4"></div>
        <div className="w-8 h-8 rounded-full bg-grey-darken absolute ring-2 ring-white -top-[3px] left-[35%]"></div>
        <div className="w-8 h-8 rounded-full bg-grey-darken absolute ring-2 ring-white -top-[3px] left-[55%]"></div>
      </div>
    </div>
  )
}