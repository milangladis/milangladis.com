import Head from 'next/head'
import ButtonLink from '../src/components/buttonLink';
import Timeline from '../src/components/timeline';
import RotationImage from '../src/components/rotationImage';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import Social from '../src/components/social';
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
        <meta name="description" content="Hi 👋 I'm Milan. Product, design, and tech person who builds web products for 3D, AR, AI, AdTech, blockchain, and metaverse." />
      </Head>
      
      
      <header className='flex flex-col w-full p-32 pb-0 items-center md:flex-row'>
        <h1 className='flex flex-col items-center mb-16 md:mb-0 md:items-start'>
          <span className='mb-8 md:mb-0 text-24 md:text-18 font-semibold'>Milan Gladiš</span>
          <span className='text-14 md:text-12 -mt-4 font-medium opacity-50'>Product · Design · Code</span>
        </h1>
        <div className='navigation flex flex-col md:flex-row navigation flex-1 justify-center md:justify-end gap-16 list-none align-middle flex-wrap '>            
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <RotationImage type="content" maxTilt="10">
              <a href="https://blog.milangladis.com/" className='flex w-fit h-48 gap-8 px-16 items-center justify-center rounded-full font-semibold border-2 border-transparent hover:border-grey transition group'>
                <span className="flex gap-8 items-center group-hover:scale-105 transition">
                  Blog
                </span>
              </a>
              </RotationImage>
            <RotationImage type="content" maxTilt="10">
              <a href="/cv.pdf" target="_blank" className='flex w-fit h-48 gap-8 px-16 items-center justify-center rounded-full font-semibold border-2 border-transparent hover:border-grey transition group'>
                <span className="flex gap-8 items-center group-hover:scale-105 transition">
                  Résumé
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 18H8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 10L12 14L8 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
              </RotationImage>
            {/* <div className="flex justify-center gap-8">
              <a className='flex w-48 h-48 items-center justify-center rounded-full border-2 border-transparent hover:border-black transition' href="https://blog.milangladis.com" target="_blank" rel="noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_545_6425)"><path d="M1.44408 1.03513L14.724 0.0542516C16.3553 -0.0856684 16.7743 0.00865156 17.8001 0.754332L22.0392 3.74065C22.7383 4.25425 22.9711 4.39417 22.9711 4.95337V21.3317C22.9711 22.3582 22.5984 22.9654 21.2935 23.058L5.87208 23.9921C4.89288 24.0384 4.42656 23.8985 3.91368 23.245L0.792 19.1856C0.23208 18.4385 0 17.8793 0 17.2255V2.66713C0 1.82785 0.37272 1.12801 1.44408 1.03513Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M14.724 0.0544916L1.44408 1.03537C0.37272 1.12801 0 1.82809 0 2.66713V17.2255C0 17.8791 0.23208 18.4383 0.792 19.1856L3.91368 23.2447C4.42656 23.8983 4.89288 24.0384 5.87208 23.9919L21.2938 23.0583C22.5977 22.9654 22.9714 22.3582 22.9714 21.3319V4.95361C22.9714 4.42321 22.7618 4.27033 22.145 3.81769L17.8001 0.754332C16.7746 0.00865156 16.3553 -0.0856684 14.724 0.0542516V0.0544916ZM6.2208 4.68553C4.96152 4.77025 4.67592 4.78945 3.96072 4.20793L2.14248 2.76169C1.95768 2.57449 2.05056 2.34097 2.51616 2.29441L15.2825 1.36153C16.3546 1.26793 16.9128 1.64161 17.3321 1.96801L19.5216 3.55441C19.6152 3.60169 19.848 3.88081 19.5679 3.88081L6.384 4.67449L6.2208 4.68577V4.68553ZM4.75272 21.192V7.28809C4.75272 6.68089 4.9392 6.40081 5.49744 6.35377L20.64 5.46721C21.1536 5.42089 21.3857 5.74729 21.3857 6.35353V20.1648C21.3857 20.772 21.2921 21.2856 20.4538 21.3319L5.96328 22.1719C5.12496 22.2183 4.75296 21.9391 4.75296 21.192H4.75272ZM19.0567 8.03353C19.1496 8.45353 19.0567 8.87353 18.6367 8.92153L17.9383 9.06001V19.3255C17.3318 19.6519 16.7736 19.8384 16.307 19.8384C15.5614 19.8384 15.3751 19.6049 14.8166 18.9055L10.2494 11.7199V18.672L11.6942 18.9991C11.6942 18.9991 11.6942 19.8391 10.5286 19.8391L7.31496 20.0256C7.22136 19.8384 7.31496 19.3721 7.64064 19.2792L8.47992 19.0464V9.85441L7.3152 9.76009C7.2216 9.34009 7.4544 8.73361 8.1072 8.68657L11.5553 8.45449L16.3073 15.733V9.29377L15.096 9.15457C15.0024 8.64025 15.3751 8.26657 15.8407 8.22097L19.0567 8.03377V8.03353Z" fill="black"/></g><defs><clipPath id="clip0_545_6425"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
              </a>
              <a className='flex w-48 h-48 items-center justify-center rounded-full border-2 border-transparent hover:border-black transition' href="https://www.linkedin.com/in/milangladis/" target="_blank" rel="noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_546_6429)"><path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="black"/></g><defs><clipPath id="clip0_546_6429"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
              </a>
              <a className='flex w-48 h-48 items-center justify-center rounded-full border-2 border-transparent hover:border-black transition' href="https://twitter.com/milangladis" target="_blank" rel="noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_201_5301)"><path d="M23.954 4.569C23.069 4.958 22.124 5.223 21.129 5.344C22.143 4.733 22.923 3.77 23.292 2.621C22.341 3.176 21.287 3.58 20.165 3.805C19.269 2.846 17.992 2.246 16.574 2.246C13.857 2.246 11.654 4.449 11.654 7.163C11.654 7.553 11.699 7.928 11.781 8.287C7.691 8.094 4.066 6.13 1.64 3.161C1.213 3.883 0.974 4.722 0.974 5.636C0.974 7.346 1.844 8.849 3.162 9.732C2.355 9.706 1.596 9.484 0.934 9.116V9.177C0.934 11.562 2.627 13.551 4.88 14.004C4.467 14.115 4.031 14.175 3.584 14.175C3.27 14.175 2.969 14.145 2.668 14.089C3.299 16.042 5.113 17.466 7.272 17.506C5.592 18.825 3.463 19.611 1.17 19.611C0.78 19.611 0.391 19.588 0 19.544C2.189 20.938 4.768 21.753 7.557 21.753C16.611 21.753 21.556 14.257 21.556 7.767C21.556 7.558 21.556 7.347 21.541 7.137C22.502 6.448 23.341 5.577 24.001 4.589L23.954 4.569Z" fill="black"/></g><defs><clipPath id="clip0_201_5301"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
              </a>
            </div> */}
          </div>
          <div className="hidden md:flex">
            <RotationImage type="content" maxTilt="10">
              <ButtonLink onClick={openModal} href="mailto:hello@milangladis.com" className="group border-2 transition">
                <span className="flex gap-8 items-center group-hover:scale-105 transition">
                  Contact me
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
            <div className="relative max-w-[190px] md:max-w-[290px] mb-32 md:mb-0 ">
              <RotationImage cursor="false" type="image" src="/images/MilanGladisProfile.png" width="290" height="407" alt="Milan Gladis - Profile"/>
            </div>

            <div className="flex flex-col justify-center">
              <span className='block mb-16'>
                <span className='relative text-32 md:text-48 font-bold'>
                  Hi 👋🏻 I&apos;m Milan
                  <span className='absolute -right-48 -top-48 flex text-14 opacity-30 font-semibold'>
                    <svg className='relative top-[28px] mr-8' width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 1C15.5 1 9 5.5 3 20M3 20L1 13.5M3 20L9 17.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    for real
                  </span>
                </span>
              </span>
              <div className="text-18 md:text-20 mb-32 leading-16">
                Product, Design, and Technology <br className='hidden sm:block' />
                person who builds web products <br className='hidden sm:block' />
                for 3D, AR, AI, AdTech, blockchain, <br className='hidden sm:block' />
                and metaverse.
              </div>
              <div>
              <RotationImage type="content" maxTilt="10" parentClass="ml-0">
                <ButtonLink onClick={openModal} href="mailto:hello@milangladis.com" target="_blank" className="pl-32 pr-24 h-64 text-white bg-black bg-gradient-to-br from-[#924FE7] to-[#5214E1]">
                  <span className="flex gap-8 items-center group-hover:scale-105 transition">
                    Start a chat
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.82843 14.8284L11.5859 19.7467C12.005 20.4942 13.1086 20.4028 13.399 19.5966L17.9363 7.00023C18.2232 6.20399 17.4529 5.43369 16.6566 5.72051L4.06029 10.2579C3.25409 10.5483 3.1627 11.6519 3.91015 12.0709L8.82843 14.8284ZM8.82843 14.8284L10.7441 12.9127" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </ButtonLink>
              </RotationImage>
              </div>
            </div>
          </div>
        </div>

        {/* <Divider /> */}
        <Social />

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <SideProject title="AI Nouns" desc="Build and publish AI apps" icon="ainouns" href="https://ainouns.com" />
          <SideProject title="Traua" desc="Monetise your travel experience" icon="traua" href="https://traua.com" />
          <SideProject title="Moqop" desc="Design automation tool" icon="moqop" href="https://moqop.com" />
          <SideProject title="Iconur" desc="Line icons set" icon="iconur" href="https://iconur.com" />
          <SideProject title="WMan" desc="Ultimate travel app" icon="wman" href="https://wman.io" />
          <SideProject title="Bouldy" desc="Gym management platform" icon="bouldy" href="https://bouldy.com" />
          <SideProject title="Runee" desc="Smart trainer for runners" icon="runee" href="https://runee.app" />
          <SideProject title="RecycleAcademy" desc="Learn how to recycle" icon="recycleacademy" href="https://recycleacademy.com" />
          <SideProject title="InvoiceLand" desc="Invoice generator for freelancers" icon="invoiceland" />
          <SideProject title="Mokop" desc="Online 3D mockups " icon="mokop" />
          <SideProject title="Bonsaio" desc="Real-time plant tracking" icon="bonsaio" />
          {/* <SideProject title="Dotbook" desc="Dotted notepad for designers" icon="dotbook" /> */}
        </div>

        <Banner onClick={openModal} />

      </main>

      <Footer />

      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-30 flex items-center justify-center" >
          <div className="absolute top-0 left-0 w-full h-full bg-[#5214E1]/90 z-10" onClick={() => setIsModalOpen(!isModalOpen)}></div>
          <div className="relative w-full max-w-6xl m-32 bg-white rounded-16 p-48 z-50">
            {/* <div className="text-24 md:text-32 font-bold">Hi ✌️</div> */}
            <div className="text-24 md:text-32 font-bold">Can&apos;t wait to hear from you!</div>
            
            <div className="mt-16 text-16 leading-10">
              <div className="">Feel free to use <a href="mailto:hello@milangladis.com" className='underline font-bold text-[#5214E1]'>hello@milangladis.com</a>,
              or find me anywhere as <strong className='text-[#5214E1]'>@milangladis</strong> on messenger, telegram, or twitter.</div>
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

function Divider() {
  return (
    <div className="w-64 h-2 my-64 md:my-128 bg-[#5214E1] m-auto"></div>
  )
}