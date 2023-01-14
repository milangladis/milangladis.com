import ButtonLink from "./buttonLink"

export default function Header() {
  
  return (
    <header className='flex flex-col w-full p-32 items-center md:flex-row'>
      <h1 className='flex flex-col items-center mb-16 md:mb-0 md:items-start'>
        <span className='mb-8 md:mb-0 text-24 md:text-18 font-semibold'>Milan Gladiš</span>
        <span className='text-14 md:text-12 -mt-4 font-medium opacity-50'>Product · Design · Code</span>
      </h1>
      <div className='navigation flex flex-col md:flex-row navigation flex-1 justify-center md:justify-end gap-32 list-none align-middle flex-wrap '>            
        <div className="flex justify-center gap-8">
          <a className='flex w-48 h-48 items-center justify-center rounded-full border-2 border-transparent hover:border-black transition' href="https://blog.milangladis.com" target="_blank" rel="noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_545_6425)"><path d="M1.44408 1.03513L14.724 0.0542516C16.3553 -0.0856684 16.7743 0.00865156 17.8001 0.754332L22.0392 3.74065C22.7383 4.25425 22.9711 4.39417 22.9711 4.95337V21.3317C22.9711 22.3582 22.5984 22.9654 21.2935 23.058L5.87208 23.9921C4.89288 24.0384 4.42656 23.8985 3.91368 23.245L0.792 19.1856C0.23208 18.4385 0 17.8793 0 17.2255V2.66713C0 1.82785 0.37272 1.12801 1.44408 1.03513Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M14.724 0.0544916L1.44408 1.03537C0.37272 1.12801 0 1.82809 0 2.66713V17.2255C0 17.8791 0.23208 18.4383 0.792 19.1856L3.91368 23.2447C4.42656 23.8983 4.89288 24.0384 5.87208 23.9919L21.2938 23.0583C22.5977 22.9654 22.9714 22.3582 22.9714 21.3319V4.95361C22.9714 4.42321 22.7618 4.27033 22.145 3.81769L17.8001 0.754332C16.7746 0.00865156 16.3553 -0.0856684 14.724 0.0542516V0.0544916ZM6.2208 4.68553C4.96152 4.77025 4.67592 4.78945 3.96072 4.20793L2.14248 2.76169C1.95768 2.57449 2.05056 2.34097 2.51616 2.29441L15.2825 1.36153C16.3546 1.26793 16.9128 1.64161 17.3321 1.96801L19.5216 3.55441C19.6152 3.60169 19.848 3.88081 19.5679 3.88081L6.384 4.67449L6.2208 4.68577V4.68553ZM4.75272 21.192V7.28809C4.75272 6.68089 4.9392 6.40081 5.49744 6.35377L20.64 5.46721C21.1536 5.42089 21.3857 5.74729 21.3857 6.35353V20.1648C21.3857 20.772 21.2921 21.2856 20.4538 21.3319L5.96328 22.1719C5.12496 22.2183 4.75296 21.9391 4.75296 21.192H4.75272ZM19.0567 8.03353C19.1496 8.45353 19.0567 8.87353 18.6367 8.92153L17.9383 9.06001V19.3255C17.3318 19.6519 16.7736 19.8384 16.307 19.8384C15.5614 19.8384 15.3751 19.6049 14.8166 18.9055L10.2494 11.7199V18.672L11.6942 18.9991C11.6942 18.9991 11.6942 19.8391 10.5286 19.8391L7.31496 20.0256C7.22136 19.8384 7.31496 19.3721 7.64064 19.2792L8.47992 19.0464V9.85441L7.3152 9.76009C7.2216 9.34009 7.4544 8.73361 8.1072 8.68657L11.5553 8.45449L16.3073 15.733V9.29377L15.096 9.15457C15.0024 8.64025 15.3751 8.26657 15.8407 8.22097L19.0567 8.03377V8.03353Z" fill="black"/></g><defs><clipPath id="clip0_545_6425"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
          </a>
          <a className='flex w-48 h-48 items-center justify-center rounded-full border-2 border-transparent hover:border-black transition' href="https://www.linkedin.com/in/milangladis/" target="_blank" rel="noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_546_6429)"><path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="black"/></g><defs><clipPath id="clip0_546_6429"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
          </a>
          <a className='flex w-48 h-48 items-center justify-center rounded-full border-2 border-transparent hover:border-black transition' href="https://twitter.com/milangladis" target="_blank" rel="noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_201_5301)"><path d="M23.954 4.569C23.069 4.958 22.124 5.223 21.129 5.344C22.143 4.733 22.923 3.77 23.292 2.621C22.341 3.176 21.287 3.58 20.165 3.805C19.269 2.846 17.992 2.246 16.574 2.246C13.857 2.246 11.654 4.449 11.654 7.163C11.654 7.553 11.699 7.928 11.781 8.287C7.691 8.094 4.066 6.13 1.64 3.161C1.213 3.883 0.974 4.722 0.974 5.636C0.974 7.346 1.844 8.849 3.162 9.732C2.355 9.706 1.596 9.484 0.934 9.116V9.177C0.934 11.562 2.627 13.551 4.88 14.004C4.467 14.115 4.031 14.175 3.584 14.175C3.27 14.175 2.969 14.145 2.668 14.089C3.299 16.042 5.113 17.466 7.272 17.506C5.592 18.825 3.463 19.611 1.17 19.611C0.78 19.611 0.391 19.588 0 19.544C2.189 20.938 4.768 21.753 7.557 21.753C16.611 21.753 21.556 14.257 21.556 7.767C21.556 7.558 21.556 7.347 21.541 7.137C22.502 6.448 23.341 5.577 24.001 4.589L23.954 4.569Z" fill="black"/></g><defs><clipPath id="clip0_201_5301"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
          </a>
        
        </div>
        <div>
          <ButtonLink className="hidden md:flex group border-2 hover:bg-black transition" href="mailto:hello@milangladis.com" target="_blank">
            <span className='group-hover:text-white transition'>Contact me</span>
            <svg className='group-hover:invert transition' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.82843 14.8284L11.5859 19.7467C12.005 20.4942 13.1086 20.4028 13.399 19.5966L17.9363 7.00023C18.2232 6.20399 17.4529 5.43369 16.6566 5.72051L4.06029 10.2579C3.25409 10.5483 3.1627 11.6519 3.91015 12.0709L8.82843 14.8284ZM8.82843 14.8284L10.7441 12.9127" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}
