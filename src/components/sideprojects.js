import Link from "next/link"
import { useState } from "react";
import RotationImage from "./rotationImage";

const SideProjects = () => {

  const [itemsToShow, setItemsToShow] = useState(6);


  const roles = [
    {
      logo: 'wman',
      projectName: 'WMan',
      domain: '.io',
      url: 'https://wman.io',
      description: 'Ultimate AI travel app creates a travel plan for you. By using various APIs and GPT4, I was able to prepare bullet proof itinerary for any destination',
    },
    {
      logo: 'iconur',
      projectName: 'Iconur',
      domain: '.com',
      url: 'https://iconur.com',
      description: 'Simple and consistent line icon set available as an interactive web application, but also as Figma and Figjam Plugin. Just click or drag & drop',
    },
    {
      logo: 'moqop',
      projectName: 'Moqop',
      domain: '.com',
      url: 'https://moqop.com',
      description: 'Design automation tool that currently generates Instagram Stories from athletes\' Strava activities. Imagine rendering images with pure JSON',
    },
    {
      logo: 'traua',
      projectName: 'Traua',
      domain: '.com',
      url: 'https://traua.com',
      description: 'Platform helps influencers to monetise their travel experience by sharing itinerary, and tips&tricks from the destination',
    },
    {
      logo: 'ainouns',
      projectName: 'AiNouns',
      domain: '.com',
      url: 'https://ainouns.com',
      description: 'Generating simple AI apps by writing text prompt speeds up repetitive tasks within the team, easily shareable with the community ',
    },
    {
      logo: 'bouldy',
      projectName: 'Bouldy',
      domain: '.com',
      url: 'https://bouldy.com',
      description: 'Gym management platform to store climbing routes, print labels with QR codes and track the climbing progress of visitors',
    },
    {
      logo: 'runee',
      projectName: 'Runee',
      domain: '.app',
      // url: 'https://runee.app',
      description: 'Connecting runners with professional trainers, building a training plan, progress tracking, and getting feedback. All in your palm',
    },
    {
      logo: 'recycleacademy',
      projectName: 'RecycleAcademy',
      domain: '.com',
      description: 'Wanted to teach more people of how to recycle trash on the web and via iOS mobile app. I scanned products’ barcodes and suggest proper bin',
    },
    {
      logo: 'invoiceland',
      projectName: 'Invoiceland',
      domain: '.com',
      description: 'Library of invoice templates for SME and freelancers in easy to edit formats. Invoice editor was in the process, but never finished',
    },
    {
      logo: 'mokop',
      projectName: 'Moqop',
      description: 'First Moqop platform was an online 3D mockup tool that generated images of pre-rendered 3D devices with replaceable screens',
    },
    {
      logo: 'bonsaio',
      projectName: 'Bonsaio',
      description: 'I built a IoT plant health system that streamed data from the pot like moisture and temperature to all connected devices via web-sockets',
    },
    {
      logo: 'dotbook',
      projectName: 'Dotbook',
      description: 'One of my favourite offline project was dotted notepad for designers with simple dot grid helps designers mock up wireframes and user flow',
    },
  ]

  const numberPerPage = 30
  const showmore = () => {
    const showItem = itemsToShow + numberPerPage
    setItemsToShow(showItem)
  }

  return (
    <div className="">
      <div className="grid md:grid-cols-3 gap-40">
        {
          roles.slice(0, itemsToShow).map((project, index) => (
            // roles.map((project, index) => (
            <Project key={index} {...project} />
          ))
        }
      </div>
      {itemsToShow < 7 ? 
        <div className="mt-32">
          <RotationImage type="content" maxTilt="10">
            <div onClick={showmore} className="mx-auto text-13 inline-block font-semibold border-2 rounded-full px-16 py-4 border-black cursor-pointer transition hover:bg-black hover:text-white">Load more projects</div>
          </RotationImage>
        </div>
      : ''}
    </div>
  )
}

const Project = (project) => {
  
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center md:items-start md:flex-col gap-12">
        <img src={`/images/portfolio/portfolioIcons/${project.logo}.svg`} alt="" className="h-24 w-24" />
        <div className="flex w-full">
          {project.url ? 
            <Link href={project.url} target="_blank" className="flex h-24 items-center gap-4 py-0 whitespace-nowrap">
              <div className="flex gap-2 flex-1">
                <div className="text-16 md:text-20 font-bold">{project.projectName}</div>
                <div className="opacity-50 text-13 mt-2">{project.domain}</div>
              </div>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 9.33337V11.3334C12 12.0698 11.4031 12.6667 10.6667 12.6667H5.33333C4.59695 12.6667 4 12.0698 4 11.3334V6.00005C4 5.26367 4.59695 4.66671 5.33333 4.66671H7.33333M9.66667 7.00004L13.3334 3.33345M13.3334 3.33345L10.3333 3.33337M13.3334 3.33345V6.33337" stroke="black" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </Link> 
          : 
            <div className="flex gap-2 flex-1">
              <div className="text-16 md:text-20 font-bold">{project.projectName}</div>
              <div className="opacity-50 text-13 mt-2">{project.domain}</div>
            </div>
          }
        </div>
      </div>
      <div className="">{project.description}</div>
      <div className="text-14 opacity-70">{project.expert}</div>
    </div>
  )
}

export default SideProjects