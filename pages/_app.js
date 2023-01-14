import '../styles/globals.css'
import '../styles/random.css'

import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId="UA-28266022-2" />
      <Component {...pageProps} />
    </>
  )
  // return (
  //   <main className={poppins.className}>
  //     <Component {...pageProps} />
  //   </main>
  // )
}
