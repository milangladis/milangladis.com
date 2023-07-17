import Image from "next/image";
import RotationImage from "./rotationImage";


const Social = () => {
  var test = "asdf";
  return (
    <div className="-mx-16 my-64 md:my-96 flex flex-wrap justify-center xl:justify-between text-16">
        <Item name="Strava" icon="strava" link="https://www.strava.com/athletes/42409445" color="FC4C01" />
        <Item name="Linkedin" icon="linkedin" link="https://www.linkedin.com/in/milangladis/" color="2C64BC" />
        <Item name="Twitter" icon="twitter" link="https://twitter.com/milangladis" color="4A99E9" />
        <Item name="GitHub" icon="github" link="https://github.com/milangladis/" color="000000" />
        {/* <Item name="Notion" icon="notion" link="https://blog.milangladis.com/" color="D16A5E" /> */}
        <Item name="Figma" icon="figma" link="https://www.figma.com/@milangladis" color="000000" />
        <Item name="Dribbble" icon="dribbble" link="https://dribbble.com/milangladis" color="D85888" />
        <Item name="ProductHunt" icon="producthunt" link="https://www.producthunt.com/@milangladis" color="FF6154" />
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
        className="flex flex-1 items-center justify-center text-14 border-2 border-transparent xs:hover:border-grey rounded-full xs:p-8 md:px-16 md:py-12 group font-semibold"
        style={{ color: color}}
      >
        <span className="flex items-center group-hover:scale-105 transition">
          <Image src={`/images/social/${icon}.svg`} width={24} height={24} alt={name + ' logo'}  className="w-20 xl:mr-12"/>
          <span className="hidden xl:block">{name}</span>
        </span>
      </a>
    </RotationImage>
  )
}

