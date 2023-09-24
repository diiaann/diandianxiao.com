import '../styles/globals.css'
import localFont from 'next/font/local'
import { Cormorant_Garamond } from 'next/font/google'

const graphik = localFont({
  src: [
    {
      path: './fonts/Graphik-Semibold-Web.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Graphik-Regular-Web.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Graphik-RegularItalic-Web.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-graphik'
})

const garamond = Cormorant_Garamond({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300'],
  variable: '--font-garamond',
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${garamond.variable} ${graphik.variable} font-sans`} >
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
