import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import RotationImage from "./rotationImage";

const Skills = () => {

  const [itemsToShow, setItemsToShow] = useState(30);


  const skills = [
    'Product Leadership',  
    'Product Design',
    'Full-stack Web Engineering',
    'Automation',  
    'LLMs',  
    'Go-To-Market',
    'UX/UI',
    'Icons',
    'Design Systems',
    'Branding',
    'Sales',
    'Marketing',
    'SEO',
    'Early-stage Startups',
    'Hiring',
  ]

  return (
    <div className="">
      <div className="flex flex-wrap gap-16 justify-center">
        {
          skills.map((item, index) => (
            <div key={index} className="bg-grey rounded-full px-12 py-4 ">
              {item}
            </div>
          ))
        }
      </div>
      
    </div>
  )
}


export default Skills