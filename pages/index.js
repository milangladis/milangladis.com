import Head from 'next/head'
import ButtonLink from '../src/components/buttonLink';
import Timeline from '../src/components/timeline';
import RotationImage from '../src/components/rotationImage';
import Header from '../src/components/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Milan Gladiš · Product · Design · Code</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Hi 👋 I'm Milan. Product, design, and tech person who builds web products for 3D, AR, AI, AdTech, blockchain, and metaverse." />
      </Head>
      
      
      <main className="flex flex-col min-h-screen p-32">
        
        <Header />

        <div className="flex-1 items-center justify-center">
          <div className="flex flex-col md:flex-row promo md:mt-96 gap-64 lg:gap-96 justify-center items-center">
            <div className="relative max-w-[190px] md:max-w-[290px] mb-32 md:mb-0 ">
              <RotationImage type="image" src="/images/MilanGladisProfile.png" width="290" height="407" alt="Milan Gladis - Profile"/>
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
              <div className="text-18 md:text-24 mb-32 leading-16">
                Product, Design, and Technology <br className='hidden sm:block' />
                person who builds web products<br className='hidden sm:block' />
                for 3D, AR, AI, AdTech, blockchain, <br className='hidden sm:block' />
                and metaverse.
              </div>
              <div>
              <RotationImage type="content" src="/images/MilanGladisProfile.png" width="195">
                <ButtonLink href="mailto:hello@milangladis.com" target="_blank" className="pl-32 pr-24 h-64 text-18 text-white bg-black bg-gradient-to-br from-[#924FE7] to-[#5214E1]">
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

        <div className="w-64 h-2 my-96 md:my-128 bg-grey m-auto"></div>

        <div className="text-center">
          <div className="text-32 md:text-40 font-bold">Experience</div>
          <div className="text-18 max-w-1/2 mt-8 leading-16">
            I built a bunch of projects for fun, <br /> 
            and to learn new tech and explore new markets</div>
        </div>

        <Timeline />

      </main>
    </>
  )
}








