import Head from 'next/head'
import ButtonLink from '../src/components/buttonLink';
import Timeline from '../src/components/timeline';
import RotationImage from '../src/components/rotationImage';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <Head>
        <title>Milan Gladiš · Product · Design · Code</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Hi 👋 I'm Milan. Product, design, and tech person who builds web products for 3D, AR, AI, AdTech, blockchain, and metaverse." />
      </Head>
      
      
      <Header />
      <main className="flex flex-col min-h-screen p-32 max-w-[1100px] m-auto">
        
        <div className="flex-1 items-center justify-center">
          <div className="flex flex-col md:flex-row promo md:mt-96 gap-64 lg:gap-96 justify-center items-center">
            <div className="relative max-w-[190px] md:max-w-[290px] mb-32 md:mb-0 ">
              <RotationImage cursor="false" type="image" src="/images/MilanGladisProfile.png" width="290" height="407" alt="Milan Gladis - Profile"/>
            </div>

            <div className="flex flex-col justify-center">
              <span className='block mb-16'>
                <span className='relative text-32 md:text-48 font-bold'>
                  Hi 👋🏻 I’m Milan
                  <span className='absolute -right-48 -top-48 flex text-14 opacity-30 font-semibold'>
                    <svg className='relative top-[28px] mr-8' width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 1C15.5 1 9 5.5 3 20M3 20L1 13.5M3 20L9 17.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    for real
                  </span>
                </span>
              </span>
              <div className="text-18 md:text-20 mb-32 leading-16">
                Product, Design, and Technology <br className='hidden sm:block' />
                person who builds web products<br className='hidden sm:block' />
                for 3D, AR, AI, AdTech, blockchain, <br className='hidden sm:block' />
                and metaverse.
              </div>
              <div>
              <RotationImage type="content">
                <ButtonLink href="mailto:hello@milangladis.com" target="_blank" className="pl-32 pr-24 h-64 text-white bg-black bg-gradient-to-br from-[#924FE7] to-[#5214E1]">
                  Start a chat
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.82843 14.8284L11.5859 19.7467C12.005 20.4942 13.1086 20.4028 13.399 19.5966L17.9363 7.00023C18.2232 6.20399 17.4529 5.43369 16.6566 5.72051L4.06029 10.2579C3.25409 10.5483 3.1627 11.6519 3.91015 12.0709L8.82843 14.8284ZM8.82843 14.8284L10.7441 12.9127" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </ButtonLink>
              </RotationImage>
              </div>
            </div>
          </div>
        </div>

        <Divider />

        <div className="text-center mb-64">
          <div className="text-32 md:text-40 font-bold">Experience</div>
          <div className="text-18 max-w-1/2 mt-8 leading-16">
            Challenging projects and a skilled team, <br className='hidden sm:block' /> 
            the perfect combination for disruption</div>
        </div>

        <Timeline />

        <Divider />
        
        <div className="text-center mb-64">
          <div className="text-32 md:text-40 font-bold">Side projects</div>
          <div className="text-18 max-w-1/2 mt-8 leading-16">
            Built a bunch of projects for fun, <br className='hidden sm:block' /> 
            and to learn new tech and explore new markets</div>
        </div>

        <div className="flex flex-wrap">
          <SideProject title="Moqop" desc="Design automation tool" icon="moqop" href="https://moqop.com" />
          <SideProject title="Bouldy" desc="Gym management platform" icon="bouldy" href="https://bouldy.com" />
          <SideProject title="Runee" desc="Smart trainer for runners" icon="runee" />
          <SideProject title="RecycleAcademy" desc="Learn how to recycle" />
          <SideProject title="InvoiceLand" desc="Invoice templates for SME" />
          <SideProject title="Mokop" desc="Online 3D mockups " />
          <SideProject title="Iconur" desc="AI generated icons" />
          <SideProject title="Bonsaio" desc="Real-time plant tracking" />
          <SideProject title="Dotbook" desc="Dotted notepad for designers" />
        </div>

        <div className="flex flex-col items-center text-center mt-96 p-64 bg-gradient-to-br from-[#924FE7] to-[#5214E1] rounded-16 text-white">
          <div className="text-24 sm:text-32 font-bold mb-48">
            Let’s build <br className='hidden sm:block' />
            something together.
          </div>

          <RotationImage type="content">
            <ButtonLink href="mailto:hello@milangladis.com" target="_blank" className="pl-32 pr-24 h-64 bg-white text-[#5214E1]">
              Start a chat
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.82843 14.8284L11.5859 19.7467C12.005 20.4942 13.1086 20.4028 13.399 19.5966L17.9363 7.00023C18.2232 6.20399 17.4529 5.43369 16.6566 5.72051L4.06029 10.2579C3.25409 10.5483 3.1627 11.6519 3.91015 12.0709L8.82843 14.8284ZM8.82843 14.8284L10.7441 12.9127" stroke="#5214E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ButtonLink>
          </RotationImage>
        </div>

      </main>

      <Footer />
    </>
  )
}


function SideProject({...props}) {
  return (
    <>
      {props.href ?
        <a href={props.href} className="group w-full sm:w-[50%] md:w-[33.3%] mb-32 flex flex-col">
          {props.icon && <Image className='hidden md:block mb-16' width={24} height={24} src={`/images/portfolioIcons/${props.icon}.svg`} alt="" />}
          <div className="text-16 font-semibold group-hover:underline">{props.title}</div>
          <div className="">{props.desc}</div>
        </a>
      :
        <div className="w-full sm:w-[50%] md:w-[33.3%] mb-32 flex flex-col">
          {props.icon && <Image className='hidden md:block mb-16' width={24} height={24} src={`/images/portfolioIcons/${props.icon}.svg`} alt="" />}
          <div className="text-16 font-semibold">{props.title}</div>
          <div className="">{props.desc}</div>
        </div>
      }
    
    </>
  )
}

function Divider() {
  return (
    <div className="w-64 h-2 my-64 md:my-128 bg-[#5214E1] m-auto"></div>
  )
}