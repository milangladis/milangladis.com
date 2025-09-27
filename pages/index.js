import Head from 'next/head'
import ButtonLink from '../src/components/buttonLink';
// import Timeline from '../src/components/timeline';
import RotationImage from '../src/components/rotationImage';
import Header from '../src/components/header';
import {Heading2, SubHeading2, Br, Divider} from '../src/components/elements';
import Footer from '../src/components/footer';
import Social from '../src/components/social';
import Roles from '../src/components/roles';
import Teams from '../src/components/teams';
import Skills from '../src/components/skills';
import SideProjects from '../src/components/sideprojects';
import Image from 'next/image';
import { useState } from 'react';
import Banner from '../src/components/banner';


export default function Home(props) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  }

  return (
    <>
      <Head>
        <title>Milan Gladiš · Product leader & strategist for startups and founders.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
        <meta name="description" content="Hi 👋 I&apos;m Milan. Product, design, and tech person who builds web products for 3D, AR, AI, AdTech, blockchain, metaverse, and architecture." />
      </Head>

      <header className='flex flex-wrap w-full p-32 pb-0 items-center'>
        <div className="flex items-center gap-16 flex-1">
          <svg className='flex-nonegit' width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_5135_421)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.95369 4.79057C0 6.66739 0 9.1243 0 14.038C0 18.9518 0 21.4087 0.95369 23.2855C1.79258 24.9364 3.13117 26.2787 4.77758 27.1199C6.64932 28.0761 9.09958 28.0761 14 28.0761C18.9004 28.0761 21.3507 28.0761 23.2224 27.1199C24.8689 26.2787 26.2075 24.9364 27.0464 23.2855C28 21.4087 28 18.9518 28 14.038C28 9.1243 28 6.66739 27.0464 4.79057C26.2075 3.13967 24.8689 1.79746 23.2224 0.956283C21.3507 6.10118e-08 18.9004 0 14 0C9.09958 0 6.64932 6.10118e-08 4.77758 0.956283C3.13117 1.79746 1.79258 3.13967 0.95369 4.79057Z" fill="#38424B"/>
            <path d="M18.8682 8.48145C20.2235 8.48145 21.297 8.89387 22.0887 9.71875C22.8938 10.5298 23.2964 11.7534 23.2964 13.3893V13.8843V19.7407H20.1564V13.8843C20.1564 13.0044 19.9752 12.3514 19.613 11.9252C19.2641 11.4853 18.7609 11.2654 18.1033 11.2654C17.3653 11.2654 16.7816 11.5128 16.3522 12.0077C15.9228 12.4889 15.7081 13.2106 15.7081 14.173V19.7407H12.5681V13.8843C12.5681 12.1383 11.8838 11.2654 10.5151 11.2654C9.79047 11.2654 9.21346 11.5128 8.78407 12.0077C8.35467 12.4889 8.13997 13.2106 8.13997 14.173V19.7407H5V8.64641H7.99907V9.92498C8.40164 9.45749 8.89141 9.10009 9.46842 8.85263C10.0588 8.60518 10.703 8.48145 11.4007 8.48145C12.1656 8.48145 12.8566 8.63954 13.4739 8.95573C14.0911 9.25818 14.5877 9.70497 14.9634 10.2961C15.4062 9.71875 15.963 9.27194 16.634 8.95573C17.3184 8.63954 18.0631 8.48145 18.8682 8.48145Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_5135_421">
            <rect width="28" height="28" fill="white"/>
            </clipPath>
            </defs>
          </svg>

          <h1 className='flex flex-col '>
            <span className='mb-2 text-18 font-semibold'>Milan Gladiš</span>
            <span className='text-12 -mt-4 font-medium opacity-50'>Product Leader | Design & Code</span>
          </h1>
        </div>

        <div className='navigation flex flex-col md:flex-row navigation justify-end gap-16 list-none align-middle flex-wrap '>            
          <div className="flex xs:justify-end items-center gap-8">
            {/* <RotationImage type="content" maxTilt="10" parentClass="m-0">
              <a href="https://blog.milangladis.com/" className='flex w-fit h-48 gap-8 px-16 items-center justify-center rounded-full font-semibold border-2 border-transparent hover:border-grey transition group'>
                <span className="flex gap-8 items-center group-hover:scale-105 transition">
                  Blog
                </span>
              </a>
            </RotationImage> */}
            {/* <div className="flex justify-center gap-8">
              <a className='flex w-48 h-48 items-center justify-center rounded-full border-2 border-transparent hover:border-black transition' href="https://www.linkedin.com/in/milangladis/" target="_blank" rel="noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_546_6429)"><path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="black"/></g><defs><clipPath id="clip0_546_6429"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
              </a>
              <a className='flex w-48 h-48 items-center justify-center rounded-full border-2 border-transparent hover:border-black transition' href="https://twitter.com/milangladis" target="_blank" rel="noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.742 21.75L14.179 10.571L21.235 2.25H18.779L13.088 8.964L8.548 2.25H2.359L9.649 13.026L2.25 21.75H4.706L10.741 14.632L15.559 21.75H21.75H21.742ZM7.739 3.818L18.81 20.182H16.363L5.29 3.818H7.737H7.739Z" fill="black"/>
                </svg>

              </a>
            </div> */}
            <RotationImage type="content" maxTilt="10" parentClass="mx-0">
              <a href="/cv.pdf" target="_blank" className='flex w-fit h-48 gap-8 px-16 items-center justify-center rounded-full font-semibold border-2 border-transparent hover:border-grey transition group'>
                <span className='md:hidden'>CV</span>
                <span className="hidden md:flex gap-8 items-center group-hover:scale-105 transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 18H8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 10L12 14L8 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  PDF Résumé
                </span>
              </a>
              </RotationImage>
            <RotationImage type="content" maxTilt="10" parentClass="mx-0">
              <ButtonLink onClick={openModal} href="mailto:hello@milangladis.com" className="group border-2 transition">
                <span className="flex gap-8 items-center group-hover:scale-105 transition">
                  <span className='hidden md:block'>Schedule call</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.82843 14.8284L11.5859 19.7467C12.005 20.4942 13.1086 20.4028 13.399 19.5966L17.9363 7.00023C18.2232 6.20399 17.4529 5.43369 16.6566 5.72051L4.06029 10.2579C3.25409 10.5483 3.1627 11.6519 3.91015 12.0709L8.82843 14.8284ZM8.82843 14.8284L10.7441 12.9127" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </ButtonLink>
            </RotationImage>
          </div>
        </div>
      </header>
      
      <main className="flex flex-col min-h-screen p-32 max-w-[1100px] m-auto">
        
        <div className="flex-1 items-center justify-center">
          <div className="flex flex-col md:flex-row promo md:mt-96 gap-32 md:gap-64 lg:gap-96 justify-center items-center">
            <div className="relative max-w-[190px] md:max-w-[290px] mb-32 md:mb-0 ">
              <RotationImage cursor="false" type="image" src="/images/MilanGladisProfile.png" width="290" height="407" alt="Milan Gladis - Profile"/>
            </div>

            <div className="flex flex-col justify-center">
              <span className='block md:mb-16'>
                <span className='relative text-32 md:text-40 font-bold'>
                  {/* Hi 👋🏻  */}
                  {/* <span className='hidden sm:flex absolute -right-64 bottom-64 text-14 opacity-30 font-semibold'>
                    <svg className='relative top-[22px] mr-8' width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 1C15.5 1 9 5.5 3 20M3 20L1 13.5M3 20L9 17.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    [MEE-lahn]
                  </span> */}
                </span>
              </span>
              <div className="text-32 md:text-40 font-bold mb-16 leading-16">
                Hi, I&apos;m Milan 👋🏼 <Br />
                Product leader & advisor. <Br/> 
              </div>
              <div className="text-18 md:text-20 mb-32 leading-16">
                Fluent in design & code, guiding strategy<Br /> into tangible execution outcomes.
                {/* With 19 years of experience and fluency in design & code, <Br /> I turn bold strategy into execution   */}
              </div>
              {/* <div className="text-13 md:text-20 mb-32 leading-16">
                Fluent in design & code bringing  19y of experiece <Br/>
                to bold strategy and execution.
              </div> */}
              {/* <div className=" text-18 md:text-20 mb-32 leading-16">
              Product, design, and tech leader <Br /> 
              leading research and development <Br />
              in 3D, AR, AI, and AEC markets <Br />
              for startups, product teams, founders.
              </div> */}
              <div>
              <RotationImage type="content" maxTilt="10" parentClass="ml-0">
                <ButtonLink onClick={openModal} href="mailto:hello@milangladis.com" target="_blank" className="pl-24 pr-32 h-64 text-white bg-black bg-gradient-to-br from-[#924FE7] to-[#5214E1]">
                  <span className="flex gap-8 items-center group-hover:scale-105 transition">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.82843 14.8284L11.5859 19.7467C12.005 20.4942 13.1086 20.4028 13.399 19.5966L17.9363 7.00023C18.2232 6.20399 17.4529 5.43369 16.6566 5.72051L4.06029 10.2579C3.25409 10.5483 3.1627 11.6519 3.91015 12.0709L8.82843 14.8284ZM8.82843 14.8284L10.7441 12.9127" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Let&apos;s have a chat
                  </span>
                </ButtonLink>
              </RotationImage>
              </div>
            </div>
          </div>
        </div>

        

        <div className="py-96">
          <Heading2>My roles</Heading2>
          <SubHeading2>
            Empowering startups to build new or optimise existing products <Br /> 
            in the most efficient way that maximises revenue and drives growth
          </SubHeading2>
          <Roles />
        </div>

        {/* <Divider /> */}
        
        <div className='py-96'>
          {/* <Heading2>Skillset</Heading2>
          <SubHeading2>
            Throughout my career, I&apos;ve mostly worked within early-stage startups.<Br /> 
            I truly believe that exceptional growth happens only in dynamic environment
          </SubHeading2> */}
          <Skills />
        </div>

        {/* <Divider /> */}
        
        <div>
          <Heading2>Working with the best</Heading2>
          <SubHeading2>
            Throughout my career, I&apos;ve mostly worked within early-stage startups.<Br /> 
            I truly believe that exceptional growth happens only in dynamic environment
          </SubHeading2>
          <Teams />
        </div>




        <Social />
        
        <div className="">
          <Heading2>Side-projects I&apos;ve built</Heading2>
          <SubHeading2>
            I always build projects to learn, experiment, and grow <Br />
          </SubHeading2>
        
          <SideProjects />
        </div>

        <Banner onClick={openModal} />

      </main>

      <Footer />

      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-30 flex items-center justify-center" >
          <div className="absolute top-0 left-0 w-full h-full bg-[#5214E1]/90 z-10" onClick={() => setIsModalOpen(!isModalOpen)}></div>
          <div className="relative w-full max-w-6xl m-32 text-center bg-white rounded-16 p-64 z-50">
            {/* <div className="text-24 md:text-32 font-bold">Hi ✌️</div> */}
            <div className="text-24 md:text-32 font-bold">Let&apos;s have a chat!</div>
            
            <div className="mt-16 text-16 leading-18">
              <div className="">Send a message to <a href="mailto:hello@milangladis.com" className='underline font-bold text-[#5214E1]'>hello@milangladis.com</a>, <Br/ >
              or find <strong className='text-[#5214E1]'>@milangladis</strong> on the social platforms.</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}


function SideProject({...props}) {
  return (
    <>
      {props.href ?
        <a href={props.href} target="_blank" className="group w-full flex items-center flex-col border-2 border-transparent rounded-16 p-24 hover:border-grey" rel="noreferrer">
          {props.icon && <Image className='mb-16' width={24} height={24} src={`/images/portfolioIcons/${props.icon}.svg`} alt="" />}
          <div className="text-16 font-semibold group-hover:underline">{props.title}</div>
          <div className="">{props.desc}</div>
        </a>
      :
        <div className="w-full flex flex-col items-center p-24">
          {props.icon && <Image className='mb-16' width={24} height={24} src={`/images/portfolioIcons/${props.icon}.svg`} alt="" />}
          <div className="text-16 font-semibold">{props.title}</div>
          <div className="">{props.desc}</div>
        </div>
      }
    
    </>
  )
}