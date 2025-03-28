import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import RotationImage from "./rotationImage";

const Skills = () => {

  const [itemsToShow, setItemsToShow] = useState(30);


  const skills = [
    'Product Management',  
    'Project Management',  
    'Market Research',
    'Product Design',
    'Go-To-Market',
    'UX',
    'UI',
    'Icons',
    'Full-stack Web Engineering',
    'Design Systems',
    'Branding',
    'Early-stage Principles Setup',
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