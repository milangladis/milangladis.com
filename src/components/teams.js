import Link from "next/link"
import { useState } from "react";
import RotationImage from "./rotationImage";

const Teams = () => {

  const [itemsToShow, setItemsToShow] = useState(3);


  const teams = [
    {
      logo: 'landvault',
      company: 'Landvault',
      role: 'Product Design Lead',
      date: 'Jun 2022 - Present',
      url: 'https://landvault.io',
      description: 'Developing web3 tools that supported immersive 3D experiences creation for metaverses and virtual spaces',
    },
    {
      logo: 'admix',
      company: 'Admix',
      role: 'Product Lead',
      date: 'Mar 2021 - Jun 2022',
      // url: 'https://',
      description: 'Creating the mobile games monetisation platform that used no code and non-intrusive in-play ad solution',
    },
    {
      logo: 'vectary',
      company: 'Vectary',
      role: 'Head of Product',
      date: 'Jan 2016 - Dec 2020',
      url: 'https://vectary.com',
      description: 'Leading product of unique online 3D design engine and platform to democratise 3D content creation',
    },
    {
      logo: 'vectary',
      company: 'Vectary',
      role: 'Product Designer \n & Front-End Developer',
      date: 'Oct 2014 - Jan 2016',
      description: 'Designing MVP of 3D content creation and 3D printing engine, creating concepts, interactive prototypes, but also developing the front-end',
    },
    {
      logo: 'bonetics',
      company: 'Bonetics',
      role: 'UX/UI Designer \n & Front-End Developer',
      date: 'Apr 2013 - Oct 2014',
      description: 'Delivering UX and UI of web and mobile applications for agency’s internal projects and startup clients',
    },
    {
      logo: 'meo',
      company: 'Freelancer',
      role: 'Web Designer \n & Developer',
      date: 'Jun 2012 - Apr 2013',
      description: 'Helping SMEs to build their web presence by executing web design, development, SEO, and marketing',
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
          teams.slice(0, itemsToShow).map((team, index) => (
            <Team key={index} {...team} />
          ))
        }
      </div>
      {itemsToShow < 7 ? 
        <div className="mt-32 text-center">
          <RotationImage type="content" maxTilt="10">
            <div onClick={showmore} className="mx-auto text-13 inline-block border-2 rounded-full px-16 py-4 border-black cursor-pointer font-semibold transition hover:bg-black hover:text-white">Load more teams</div>
          </RotationImage>
        </div>
      : ''}
    </div>
  )
}

const Team = (team) => {
  
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center md:items-start md:flex-col gap-12">
        <img src={`/images/portfolio/portfolioIcons/${team.logo}.svg`} alt="" className="h-32 w-32" />
        <div className="flex w-full flex-col flex-1 md:gap-4">
          <div className="flex gap-2 flex-1 justify-between">
            {team.url ?
              <Link href={team.url} target="_blank" className="flex h-24 items-center gap-4 py-0 text-13 whitespace-nowrap opacity-50 hover:opacity-100">
                {team.company}
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 9.33337V11.3334C12 12.0698 11.4031 12.6667 10.6667 12.6667H5.33333C4.59695 12.6667 4 12.0698 4 11.3334V6.00005C4 5.26367 4.59695 4.66671 5.33333 4.66671H7.33333M9.66667 7.00004L13.3334 3.33345M13.3334 3.33345L10.3333 3.33337M13.3334 3.33345V6.33337" stroke="black" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </Link>
              :
              <div className="opacity-50 text-13 mt-2 flex-1">
                {team.company}
              </div> 
            } 

            <div className="flex h-24 items-center gap-4 py-0 px-8 text-13 whitespace-nowrap opacity-50">
              {team.date}
            </div>
          </div>
          <div className="text-16 md:text-20 font-bold leading-snug">
            {team.role.split('\n').map((str, index) => <p key={index}>{str}</p>)}
          </div>
        </div>
      </div>
      <div className="">{team.description}</div>
      <div className="text-14 opacity-70">{team.expert}</div>
    </div>
  )
}

export default Teams