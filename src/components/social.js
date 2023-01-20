import Image from "next/image";
import RotationImage from "./rotationImage";


const Social = () => {
  var test = "asdf";
  return (
    <div className="my-64 md:my-128 flex flex-wrap gap-8 md:gap-16 justify-center xl:justify-between p-16">
        <Item name="GitHub" icon="github" link="https://github.com/milangladis/" color="000000" />
        <Item name="Linkedin" icon="linkedin" link="https://www.linkedin.com/in/milangladis/" color="2C64BC" />
        <Item name="Notion" icon="notion" link="https://blog.milangladis.com/" color="D16A5E" />
        <Item name="Twitter" icon="twitter" link="https://twitter.com/milangladis" color="4A99E9" />
        <Item name="ProductHunt" icon="producthunt" link="https://www.producthunt.com/@milangladis" color="FF6154" />
        <Item name="Figma" icon="figma" link="https://www.figma.com/@milangladis" color="000000" />
    </div>
  )
}
export default Social

const Item = ({ name, link, icon, color }) => {
  color = '#' + color
  return (
      
    <RotationImage type="content" parentClass="flex" maxTilt="10">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center border-2 border-transparent hover:border-grey rounded-16 p-8 md:px-24 md:py-16 group font-semibold"
        style={{ color: color}}
      >
        <span className="flex items-center group-hover:scale-105 transition">
          <Image src={`/images/social/${icon}.svg`} width={40} height={40} alt={name + ' logo'} />
          {name}
        </span>
      </a>
    </RotationImage>
  )
}

