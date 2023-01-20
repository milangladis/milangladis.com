import Image from "next/image";
import { useEffect, useState } from "react";
import ButtonLink from "./buttonLink";
import RotationImage from "./rotationImage"

export default function Timeline(){
  
  const portfolio = [
    {
      id: 'landvault',
      company: 'LandVault',
      role: 'Product Design Lead',
      time: 'Jun 2022 - Present',
      description: 'Metaverse tools for land owners, investors, advertisers, and builders.',
      tags: 'Product · UX · UI',
      link: 'https://landvault.io/'
    },
    {
      id: 'admix',
      company: 'Admix',
      role: 'Product Lead',
      time: 'Mar 2021 - Jun 2022',
      description: 'Joined to lead Product for in-play AdTech platform to monetise free to play games',
      tags: 'PM · UX · UI'
    },
    {
      id: 'vectary',
      company: 'Vectary',
      role: 'Head of Product',
      time: 'Jan 2016 - Dec 2020',
      description: 'Led the transition to online 3D design platform for designers and e-commerce.',
      video: 'vectary-video',
      tags: '',
      link: 'https://cdn.dribbble.com/users/41543/screenshots/10946125/media/c4ebe88dad5383360c5a1051f473b6c4.mp4'
    },
    {
      id: 'vectary2',
      company: 'Vectary',
      role: 'Product Designer & Front-End Engineer',
      time: 'Oct 2014 - Jan 2016',
      description: 'Built online 3D modeling tool. From scratch. What a journey... 😅',
      tags: '',
      link: 'https://www.behance.net/gallery/76527045/Vectary-Online-3D-Design-App?tracking_source=search_projects%7Cvectary'
    },
    {
      id: 'bonetics',
      company: 'Bonetics',
      role: 'UX/UI Designer & Front-End Developer',
      time: 'Apr 2013 - Oct 2014',
      description: 'Was trying to build products for startups in a digital agency.',
      tags: 'UX, UI, Front-End'
    },
    {
      id: 'freelancer',
      company: 'Freelancer',
      role: 'Web Designer & Developer',
      time: 'Jan 2012 - Apr 2013',
      description: 'Web Designer was a role at that point!',
      tags: 'Full Stack, PM, Web Design, SEO',
      link: 'https://meo.milangladis.com/'
    }, 
  ]

  const [hoveredItem, setHoveredItem] = useState('');
  const [activeItem, setActiveItem] = useState(portfolio[0]);


  useEffect(() => {
    const item = portfolio.find(i => i.id === hoveredItem);
    if (typeof item !== "undefined") {
      console.log(item)
      setActiveItem(item);
    }
    
  }, [hoveredItem]);


  return(
    <div className="flex gap-64 w-full">
      <div className="flex flex-1 flex-col relative">
        <div className="flex flex-col flex-0 gap-8">
          <div className="w-2 top-32 bottom-32 absolute bg-grey left-[20px] md:left-[44px]"></div>
          <Item year="2006" company="Built first website" />
          <Item clickable year="2012" icon="meo" role="Web Designer & Developer" company="Freelancer" onMouseOver={() => setHoveredItem('freelancer')} className={`${(hoveredItem === 'freelancer' && 'active bg-grey')}`}/>
          <Item clickable year="2013" icon="bonetics" role="UX/UI Designer & Front-End Developer" company="Bonetics" onMouseOver={() => setHoveredItem('bonetics')} className={`${(hoveredItem === 'bonetics' && 'active bg-grey')}`}/>
          <Item clickable year="2014" icon="vectary2" role="Product Designer & Front-End Engineer" company="Vectary" onMouseOver={() => setHoveredItem('vectary2')} className={`${(hoveredItem === 'vectary2' && 'active bg-grey')}`}/>
          <Item clickable year="2016" icon="vectary" role="Head of Product" company="Vectary" onMouseOver={() => setHoveredItem('vectary')} className={`${(hoveredItem === 'vectary' && 'active bg-grey')}`}/>
          <Item clickable year="2021" icon="admix" role="Product Lead" company="Admix" onMouseOver={() => setHoveredItem('admix')} className={`${(hoveredItem === 'admix' && 'active bg-grey')}`} />
          <Item clickable year="2022" icon="landvault" role="Product Design Lead" company="LandVault" onMouseOver={() => setHoveredItem('landvault')}  className={`${(hoveredItem === 'landvault' && 'active bg-grey')}`} />
          <Item year="2023" company="Still learning" />
        </div>
      </div>
      <div className="h-[530px] hidden md:flex flex-1 flex-col">
        <div className="flex-0">
          {activeItem.video ?
            <RotationImage type="video" width="530" height="354" />
            :
            <RotationImage type="image" src={`/images/portfolio/${activeItem.id}.png`} width="530" height="354" alt="Milan Gladis - Profile" />
          }
        </div>
        <div className="portfolio text-center mt-40 px-24">
          {/* {activeItem.company && <div className="text-24 font-bold mb-4">{activeItem.company}</div>} */}
          {activeItem.time ? <div className="mb-16">{activeItem.time}</div> : ''}
          <div className="text-18 leading-16">
            {activeItem.description}
          </div>
          {/* <div className="mt-8 opacity-50">{activeItem.tags}</div> */}
          {activeItem.link && 
            <RotationImage type="content" maxTilt="10">
              <ButtonLink href={activeItem.link} target="_blank" className="mt-16 text-white bg-black">
                <span className="flex gap-8 items-center group-hover:scale-105 transition">
                  Open detail
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.82843 14.8284L11.5859 19.7467C12.005 20.4942 13.1086 20.4028 13.399 19.5966L17.9363 7.00023C18.2232 6.20399 17.4529 5.43369 16.6566 5.72051L4.06029 10.2579C3.25409 10.5483 3.1627 11.6519 3.91015 12.0709L8.82843 14.8284ZM8.82843 14.8284L10.7441 12.9127" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  </span>
              </ButtonLink>
            </RotationImage>
          }
        </div>
      </div>
    </div>
  )
}


export function Item({...props}) {
  return(
    <div className={`experienceItem relative flex flex-0 gap-16 px-0 pointer-events-none md:pointer-events-auto md:px-24 py-12 items-center z-10 rounded-16 transition ${props.clickable &&  'group cursor-pointer md:hover:bg-grey'} ${props.className ? props.className : ''}`} onMouseOver={props.onMouseOver} >
      <div className={`shrink-0 experienceYear w-40 text-center bg-white py-4 transition rounded-16 ${!props.clickable ? 'text-black/30' : 'group-hover:bg-grey'}`}>{props.year}</div>
      {props.icon ? <div className="shrink-0 h-32"><Image src={`/images/portfolioIcons/${props.icon}.svg`} width={32} height={32} alt="" /></div> : ''}
      <div className="">
        {props.role ? <div className="text-16 font-semibold">{props.role}</div> : ''}
        <div className="opacity-50">{props.company}</div>
      </div>
    </div>
  )
}