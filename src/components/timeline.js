import { useEffect, useState } from "react";
import RotationImage from "./rotationImage"
useEffect

export default function Timeline(){
  const portfolio = [
    {
      id: 'landvault',
      company: 'LandVault',
      role: 'Product Design Lead',
      time: 'Jun 2022 - Present',
      description: 'Metaverse tools for land owners, investors, advertisers, and builders.',
      tags: 'Product · UX · UI'
    },
    {
      id: 'admix',
      company: 'Admix',
      role: 'Product Lead',
      time: 'Mar 2021 - Jun 2022',
      description: 'In-play AdTech platform to monetise free to play games',
      tags: 'PM · UX · UI'
    },
    {
      id: 'vectary',
      company: 'Vectary',
      role: 'Head of Product',
      time: 'Jan 2016 - Dec 2020',
      description: 'Pivoted 3D engine to design and e-commerce market',
      video: 'vectary-video',
      tags: ''
    },
    {
      id: 'vectary2',
      company: 'Vectary',
      role: 'Product Designer & Front-End Engineer',
      time: 'Oct 2014 - Jan 2016',
      description: 'Web app to design, render, and share 3D content.',
      tags: ''
    },
    {
      id: 'bonetics',
      company: 'Bonetics',
      role: 'UX/UI Designer & Front-End Developer',
      time: 'Apr 2013 - Oct 2014',
      description: 'Trying to build products for startups ',
      tags: 'UX, UI, Front-End'
    },
    {
      id: 'freelancer',
      company: 'Freelancer',
      role: 'Web Designer & Developer',
      time: 'Jan 2012 - Apr 2013',
      description: 'Web Designer was a role at that point!',
      tags: 'Full Stack, PM, Web Design, SEO'
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
    <div className="flex gap-64 my-64 w-full max-w-[1100px] m-auto">
      <div className="flex flex-1 flex-col relative">
        <div className="flex flex-col flex-0 gap-8">
          <div className="w-2 top-32 bottom-32 absolute bg-grey left-[44px]"></div>
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
        </div>
      </div>
    </div>
  )
}


export function Item({...props}) {
  return(
    <div className={`experienceItem relative flex flex-0 gap-16 px-24 py-12 items-center z-10 rounded-16 group transition ${props.clickable &&  'cursor-pointer hover:bg-grey'} ${props.className}`} onMouseOver={props.onMouseOver} >
      <div className={`shrink-0 experienceYear w-40 text-center bg-white py-4 transition ${!props.clickable && 'text-black/30'}`}>{props.year}</div>
      {props.icon ? <div className="shrink-0 h-32"><img src={`/images/portfolioIcons/${props.icon}.svg`} alt="" /></div> : ''}
      <div className="">
        {props.role ? <div className="text-16 font-semibold">{props.role}</div> : ''}
        <div className="opacity-50">{props.company}</div>
      </div>
    </div>
  )
}