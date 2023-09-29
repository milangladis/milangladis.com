import RotationImage from "./rotationImage"
import Image from "next/image"

const Roles = () => {

  const roles = [
    {
      emoji: '🙋🏻‍♂️',
      suptitle: 'Plan · Lead · Research',
      roleName: 'Product Manager',
      description: 'Driving the growth, researching the market, planning the roadmap, OKRs, and leading cross-functional teams to deliver world-class products',
      expert: 'Expertise in scoping, organisation, ideation, problem solving, and leadership',
      icons: ['atlassian', 'miro', 'trello', 'notion']
    },
    {
      emoji: '👨🏻‍🎨',
      suptitle: 'Design UX · UI · 3D · Icon',
      roleName: 'Product Designer',
      description: 'Validating ideas, designing minimalistic and functional interface, engaging micro-interactions, meaningful icons, and immersive 3D content',
      expert: 'Specialist at pixel perfection, consistency, user experience, icon design, and 3D creation',
      icons: ['figma', 'adobe', 'vectary', 'blender']
    },
    {
      emoji: '👨🏻‍💻',
      suptitle: 'Code · no-code',
      roleName: 'Full-Stack Engineer',
      description: 'Developing functional and robust codebase with a focus on seamless user experience by using modern JavaScript tech stack',
      expert: 'Excellence in uniting design and code, micro interactions, and swift delivery',
      icons: ['reactjs', 'nextjs', 'mongodb', 'framer', 'webflow']
    }
  ]

  return (
    <div className="flex flex-col md:flex-row gap-40">
      {
        roles.map((role, index) => (
          <Role key={index} {...role} />
        ))
      }
    </div>
  )
}

const Role = (role) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center md:items-start md:flex-col gap-12">
        <div className="text-32">{role.emoji}</div>
        <div className="flex flex-col md:gap-4">
          <div className="opacity-50 uppercase text-13">{role.suptitle}</div>
          <div className="text-16 md:text-20 font-bold">{role.roleName}</div>
        </div>
      </div>
      <div className="">{role.description}</div>
      <div className="text-14 opacity-70">{role.expert}</div>
      <div className="flex gap-8 mt-8">
        {
          role.icons.map((icon, index) => (
            <RoleIcon key={index} icon={icon} />
          ))
        }
      </div>
    </div>
  )
}

const RoleIcon = ({ icon }) => {
  return (
    <div className="flex items-center justify-center hover:scale-125 duration-75 w-32 h-32">
      <Image src={`./images/tools/${icon}.svg`} alt={icon} width={24} height={24} className="w-24 h-24" />
    </div>
  )
}

export default Roles