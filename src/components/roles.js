import RotationImage from "./rotationImage"
import Image from "next/image"

const Roles = () => {

  const roles = [
    {
      emoji: '🙋🏻‍♂️',
      suptitle: 'Plan · Lead · Research',
      roleName: 'Product Manager',
      // description: 'Driving the growth, researching the market, planning the roadmap, OKRs, and leading cross-functional teams to deliver world-class products',
      description: 'Driving product growth with strong leadership, roadmap planning, and OKR alignment – from discovery to delivery.',
      expert: 'm a hands-on builder who thrives in dynamic environments.',
      icons: ['atlassian', 'miro', 'trello', 'notion']
    },
    {
      emoji: '👨🏻‍🎨',
      suptitle: 'Design UX · UI · 3D · Icon',
      roleName: 'Product Designer',
      description: 'Designing clean, functional interfaces with attention to every detail — from user flows and UI states to icons and microinteractions.',
      expert: 'I balance form and function, keeping consistency and usability at the center of everything.',
      icons: ['figma', 'adobe', 'vectary', 'blender']
    },
    {
      emoji: '👨🏻‍💻',
      suptitle: 'Code · no-code',
      roleName: 'Full-Stack Engineer',
      description: 'Bringing ideas to life with modern JavaScript tech — building front-ends that pixel perfect, and back-ends that scale.',
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
      {/* <div className="flex gap-8 mt-8">
        {
          role.icons.map((icon, index) => (
            <RoleIcon key={index} icon={icon} />
          ))
        }
      </div> */}
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