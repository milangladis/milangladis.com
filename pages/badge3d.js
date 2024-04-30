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
        <title>Milan Gladiš · Product · Design · Code</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
        <meta name="description" content="Hi 👋 I&apos;m Milan. Product, design, and tech person who builds web products for 3D, AR, AI, AdTech, blockchain, metaverse, and architecture." />
      </Head>

      <header className='flex flex-wrap w-full p-32 pb-0 items-center'>
        <h1 className='flex flex-col '>
          <span className='mb-2 text-18 font-semibold'>Milan Gladiš</span>
          <span className='text-12 -mt-4 font-medium opacity-50'>Product · Design · Code</span>
        </h1>
        <div className='navigation flex flex-col md:flex-row navigation flex-1 justify-end gap-16 list-none align-middle flex-wrap '>            
          <div className="flex xs:justify-end items-center gap-8">
            <RotationImage type="content" maxTilt="10" parentClass="mx-0">
              <a href="/cv.pdf" target="_blank" className='flex w-fit h-48 gap-8 px-16 items-center justify-center rounded-full font-semibold border-2 border-transparent hover:border-grey transition group'>
                <span className='md:hidden'>CV</span>
                <span className="hidden md:flex gap-8 items-center group-hover:scale-105 transition">
                  Résumé
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 18H8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 10L12 14L8 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
              </RotationImage>
            
            <RotationImage type="content" maxTilt="10" parentClass="mx-0">
              <ButtonLink onClick={openModal} href="mailto:hello@milangladis.com" className="group border-2 transition">
                <span className="flex gap-8 items-center group-hover:scale-105 transition">
                  <span className='hidden md:block'>Contact me</span>
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
          <div className="flex flex-col md:flex-row promo md:mt-96 gap-64 lg:gap-96 justify-center items-center">
            

            <div className="flex flex-col justify-center items-center">            
              1.
              <RotationImage type="content" maxTilt="10" parentClass="ml-0">
                <Image src="/resource/badge.svg" width={384} height={384} />
              </RotationImage>
            </div>

            <div className="flex flex-col justify-center items-center">  
            2.            
              <RotationImage type="content" maxTilt="15" scale="1.1" parentClass="ml-0">
                <Image src="/resource/badge.svg" width={384} height={384} />
              </RotationImage>
            </div>

            <div className="flex flex-col justify-center items-center">   
            3.           
              <RotationImage type="content" maxTilt="20" scale="1.2" parentClass="ml-0">
                <Image src="/resource/badge.svg" width={384} height={384} />
              </RotationImage>
            </div>
          </div>
        </div>



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