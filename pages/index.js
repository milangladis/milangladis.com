import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import ButtonLink from '../src/components/buttonLink';
import { useEffect, useState } from 'react';


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Milan Gladiš · Product · Design · Code</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-col min-h-screen p-32">
        <header className='flex flex-col w-full pb-32 items-center md:flex-row'>
          <h1 className='flex flex-col items-center mb-16 md:mb-0 md:items-start'>
            <span className='text-18 font-semibold'>Milan Gladiš</span>
            <span className='text-12 -mt-4 font-medium opacity-50'>full-stack product designer</span>
          </h1>
          <nav className='flex-1 justify-center md:justify-end flex gap-16 list-none align-middle flex-wrap '>
            {/* <li>
              <a href="/blog">Blog</a>
            </li> */}
            {/* <li>
              <a href="/blog">Résumé</a>
            </li> */}
            <li>
              <a className='p-0' href="https://twitter.com/milangladis" target="_blank" rel="noreferrer">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_201_5300)"><path d="M35.954 16.569C35.069 16.958 34.124 17.223 33.129 17.344C34.143 16.733 34.923 15.77 35.292 14.621C34.341 15.176 33.287 15.58 32.165 15.805C31.269 14.846 29.992 14.246 28.574 14.246C25.857 14.246 23.654 16.449 23.654 19.163C23.654 19.553 23.699 19.928 23.781 20.287C19.691 20.094 16.066 18.13 13.64 15.161C13.213 15.883 12.974 16.722 12.974 17.636C12.974 19.346 13.844 20.849 15.162 21.732C14.355 21.706 13.596 21.484 12.934 21.116V21.177C12.934 23.562 14.627 25.551 16.88 26.004C16.467 26.115 16.031 26.175 15.584 26.175C15.27 26.175 14.969 26.145 14.668 26.089C15.299 28.042 17.113 29.466 19.272 29.506C17.592 30.825 15.463 31.611 13.17 31.611C12.78 31.611 12.391 31.588 12 31.544C14.189 32.938 16.768 33.753 19.557 33.753C28.611 33.753 33.556 26.257 33.556 19.767C33.556 19.558 33.556 19.347 33.541 19.137C34.502 18.448 35.341 17.577 36.001 16.589L35.954 16.569Z" fill="black"/></g><defs><clipPath id="clip0_201_5300"><rect width="24" height="24" fill="white" transform="translate(12 12)"/></clipPath></defs></svg>
              </a>
            </li>
            <li>
              <a className='p-0' href="https://www.linkedin.com/in/milangladis/" target="_blank" rel="noreferrer">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_201_5303)"><path d="M32.447 32.452H28.893V26.883C28.893 25.555 28.866 23.846 27.041 23.846C25.188 23.846 24.905 25.291 24.905 26.785V32.452H21.351V21H24.765V22.561H24.811C25.288 21.661 26.448 20.711 28.181 20.711C31.782 20.711 32.448 23.081 32.448 26.166V32.452H32.447ZM17.337 19.433C16.193 19.433 15.274 18.507 15.274 17.368C15.274 16.23 16.194 15.305 17.337 15.305C18.477 15.305 19.401 16.23 19.401 17.368C19.401 18.507 18.476 19.433 17.337 19.433ZM19.119 32.452H15.555V21H19.119V32.452ZM34.225 12H13.771C12.792 12 12 12.774 12 13.729V34.271C12 35.227 12.792 36 13.771 36H34.222C35.2 36 36 35.227 36 34.271V13.729C36 12.774 35.2 12 34.222 12H34.225Z" fill="black"/></g><defs><clipPath id="clip0_201_5303"><rect width="24" height="24" fill="white" transform="translate(12 12)"/></clipPath></defs></svg>
              </a>
            </li>
            <li>
              <ButtonLink className="group border-2 hover:bg-black transition" href="mailto:hello@milangladis.com" target="_blank">
                <span className='group-hover:text-white transition'>Contact me</span>
                <svg className='group-hover:invert transition' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.82843 14.8284L11.5859 19.7467C12.005 20.4942 13.1086 20.4028 13.399 19.5966L17.9363 7.00023C18.2232 6.20399 17.4529 5.43369 16.6566 5.72051L4.06029 10.2579C3.25409 10.5483 3.1627 11.6519 3.91015 12.0709L8.82843 14.8284ZM8.82843 14.8284L10.7441 12.9127" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </ButtonLink>
            </li>
          </nav>
        </header>

        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col md:flex-row promo mb-64 gap-96 justify-center items-center">
            <div className="relative max-w-[190px] md:max-w-[290px]">
              {/* <RotationImage src="./images/MilanGladisProfile.png" className="block rounded-16" /> */}
              <Image className="block rounded-16" src="/images/MilanGladisProfile.png" alt="Milan Gladis profile" width="290" height="407" />
              <div className="absolute w-full aspect-[290/407] bg-grey rounded-16 top-16 -left-16 -z-10"></div>
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
              <div className="text-24 mb-32 leading-16">
                Product, Design and Tech person <br className='hidden sm:block' />
                who builds web products for 3D,<br className='hidden sm:block' />
                AR, AI, AdTech, blockchain, <br className='hidden sm:block' />
                metaverse, and IoT.
              </div>
              <div className=''>
                <ButtonLink href="mailto:hello@milangladis.com" target="_blank" className="pl-24 text-16 text-white bg-black">
                  Start a chat
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.82843 14.8284L11.5859 19.7467C12.005 20.4942 13.1086 20.4028 13.399 19.5966L17.9363 7.00023C18.2232 6.20399 17.4529 5.43369 16.6566 5.72051L4.06029 10.2579C3.25409 10.5483 3.1627 11.6519 3.91015 12.0709L8.82843 14.8284ZM8.82843 14.8284L10.7441 12.9127" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}








function RotationImage({src}) {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 })

  useEffect(() => {
    const handleMouseMove = event => {
      const { clientX, clientY } = event
      const x = (clientY / window.innerHeight) * 20
      const y = (clientX / window.innerWidth) * 20
      setRotation({ x, y, z: 0 })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
      
  return (
    <>
      <Image
        src={src}
        alt="Image"
        // style={{
        //   transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
        // }}
      />
      {/* <div className="absolute w-full aspect-[290/407] bg-grey rounded-16 top-16 -left-16 -z-10"
        style={{
          transform: `rotateX(${-rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
        }}
      ></div> */}
    </>
  )
}