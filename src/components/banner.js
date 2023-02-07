import { useEffect, useRef, useState } from "react";
import RotationImage from "./rotationImage";
import ButtonLink from "./buttonLink";

const Banner = (props) => {

  const openmodal = (e) => {
    e.preventDefault()
    props.updatemodal(true)
  }
  // const updatemodal = props.updatemodal;

  const bgRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (!isInViewport) return;
      const y = window.scrollY; 
      bgRef.current.style.backgroundPositionY = `${y * 0.7}px`;
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    }
    
  },[isInViewport]);


  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInViewport(true);
          } else {
            setIsInViewport(false);
          }
        });
      });
      observer.observe(bgRef.current);
      return () => {
        observer.unobserve(bgRef.current);
      }
    }
  }, [bgRef]);

  return (
    <div className="relative flex flex-col items-center text-center mt-48 md:mt-96 p-96 rounded-16 text-white bg-gradient-to-br from-[#924FE7] to-[#5214E1]">
      <div ref={bgRef} className="moveBackground absolute top-0 right-0 bottom-0 left-0 bg-iconpattern  rounded-16"></div>
      <div className="">
        <div className="text-32 font-bold mb-48">
          Let’s build <br className='hidden sm:block' />
          something together
        </div>

        <RotationImage type="content" maxTilt="10">
          <ButtonLink {...props} onClick={props.updatemodal && openmodal}  href="mailto:hello@milangladis.com" className="pl-32 pr-24 h-64 bg-white text-[#5214E1] group">
            <span className="flex gap-8 items-center group-hover:scale-105 transition">
              Start a chat
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.82843 14.8284L11.5859 19.7467C12.005 20.4942 13.1086 20.4028 13.399 19.5966L17.9363 7.00023C18.2232 6.20399 17.4529 5.43369 16.6566 5.72051L4.06029 10.2579C3.25409 10.5483 3.1627 11.6519 3.91015 12.0709L8.82843 14.8284ZM8.82843 14.8284L10.7441 12.9127" stroke="#5214E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </ButtonLink>
        </RotationImage>

        <a href="https://iconur.com" className='absolute flex items-center bottom-16 right-24 uppercase font-bold opacity-70 hover:opacity-100 transition' target="_blank" rel="noreferrer">
          
          Get icons
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="#FFF" fill="none" strokeLinejoin="round" strokeWidth="2" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L18 12M18 12L14 8M18 12L14 16"></path></svg>
        </a>
      </div>
    </div>
  )
}

export default Banner;