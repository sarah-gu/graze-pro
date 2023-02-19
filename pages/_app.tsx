import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'

import { ConvexProvider, ConvexReactClient } from 'convex/react'
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL ?? "")
const monty = Montserrat({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConvexProvider client={convex}>
      <Component {...pageProps} className={monty.className}/>
    </ConvexProvider>
  )
}

export default MyApp
