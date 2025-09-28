import RotationImage from "./rotationImage"
import Image from "next/image"

const Roles = () => {

  const roles = [
    {
      emoji: '🚀',
      suptitle: 'Discover · Plan · Deliver',
      roleName: 'Product Leader & strategist',
      // description: 'Driving the growth, researching the market, planning the roadmap, OKRs, and leading cross-functional teams to deliver world-class products',
      description: 'Driving product growth with strong leadership, roadmap planning, and OKR alignment – from discovery to delivery.',
      expert: 'I am a cross-functional leader who translate vision into products.',
      icons: ['atlassian', 'miro', 'trello', 'notion']
    },
    {
      emoji: '👨🏼‍💻',
      suptitle: 'Design · Validate · Implement',
      roleName: 'Design & Engineering Fluency',
      // description: 'Driving the growth, researching the market, planning the roadmap, OKRs, and leading cross-functional teams to deliver world-class products',
      description: 'Vast experience in building products allows me to understand and lead, but also design and implement solutions when needed.',
      expert: 'I am a great asset in early stage and can cover multiple roles.',
      icons: ['atlassian', 'miro', 'trello', 'notion']
    },

    // {
    //   emoji: '👨🏻‍🎨',
    //   suptitle: 'Design UX · UI · 3D · Icon',
    //   roleName: 'Product Designer',
    //   description: 'Designing clean, functional interfaces with attention to every detail — from user flows and UI states to icons and microinteractions.',
    //   expert: 'I balance form and function, keeping consistency and usability at the center of everything.',
    //   icons: ['figma', 'adobe', 'vectary', 'blender']
    // },
    // {
    //   emoji: '👨🏻‍💻',
    //   suptitle: 'Code · no-code',
    //   roleName: 'Full-Stack Engineer',
    //   description: 'Bringing ideas to life with modern JavaScript tech — building front-ends that pixel perfect, and back-ends that scale.',
    //   expert: 'Excellence in uniting design and code, micro interactions, and swift delivery',
    //   icons: ['reactjs', 'nextjs', 'mongodb', 'framer', 'webflow']
    // }
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
          <h3 className="">{role.roleName}</h3>
        </div>
      </div>
      <div className="">{role.description}</div>
      <div className=" opacity-50">{role.expert}</div>
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