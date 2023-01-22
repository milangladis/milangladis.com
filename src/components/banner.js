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

        <a href="https://www.figma.com/community/file/1198945221344862992" className='absolute flex items-center gap-8 bottom-16 right-24 uppercase font-bold opacity-70 hover:opacity-100 transition' target="_blank" rel="noreferrer">
          <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_752_8355)">
            <path d="M5.33301 8.49992C5.33301 7.79267 5.61396 7.1144 6.11406 6.6143C6.61415 6.1142 7.29243 5.83325 7.99967 5.83325C8.70692 5.83325 9.3852 6.1142 9.88529 6.6143C10.3854 7.1144 10.6663 7.79267 10.6663 8.49992C10.6663 9.20716 10.3854 9.88544 9.88529 10.3855C9.3852 10.8856 8.70692 11.1666 7.99967 11.1666C7.29243 11.1666 6.61415 10.8856 6.11406 10.3855C5.61396 9.88544 5.33301 9.20716 5.33301 8.49992Z" fill="white"/>
            <path d="M0 13.8334C0 13.1262 0.280952 12.4479 0.781048 11.9478C1.28115 11.4477 1.95942 11.1667 2.66667 11.1667H5.33333V13.8334C5.33333 14.5407 5.05238 15.2189 4.55228 15.719C4.05219 16.2191 3.37391 16.5001 2.66667 16.5001C1.95942 16.5001 1.28115 16.2191 0.781048 15.719C0.280952 15.2189 0 14.5407 0 13.8334Z" fill="white"/>
            <path d="M5.33301 0.5V5.83333H7.99967C8.70692 5.83333 9.3852 5.55238 9.88529 5.05228C10.3854 4.55219 10.6663 3.87391 10.6663 3.16667C10.6663 2.45942 10.3854 1.78115 9.88529 1.28105C9.3852 0.780952 8.70692 0.5 7.99967 0.5L5.33301 0.5Z" fill="white"/>
            <path d="M0 3.16667C0 3.87391 0.280952 4.55219 0.781048 5.05228C1.28115 5.55238 1.95942 5.83333 2.66667 5.83333H5.33333V0.5H2.66667C1.95942 0.5 1.28115 0.780952 0.781048 1.28105C0.280952 1.78115 0 2.45942 0 3.16667Z" fill="white"/>
            <path d="M0 8.49992C0 9.20716 0.280952 9.88544 0.781048 10.3855C1.28115 10.8856 1.95942 11.1666 2.66667 11.1666H5.33333V5.83325H2.66667C1.95942 5.83325 1.28115 6.1142 0.781048 6.6143C0.280952 7.1144 0 7.79267 0 8.49992Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_752_8355">
            <rect width="10.6667" height="16" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
            </defs>
          </svg>

          Get icons
        </a>
      </div>
    </div>
  )
}

export default Banner;