import Header from './header'
import Head from 'next/head'



export default function Layout({ children }) {
    return <html>
        <Head>
          <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6338032/7958832/css/fonts.css" />
          <meta name="robots" content="noindex" />
        </Head>
        <body className="bg-sage-100">
            <Header title="Medications" blurb="test" />
            {children}
        </body>
        </html>
  }
