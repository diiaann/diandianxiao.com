import Head from 'next/head'
import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import Header from '../components/header'

function Home(props) {
  const { posts = [] } = props

  return (

    <div className="h-full h-screen">
      <Head>
		    <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6338032/7263032/css/fonts.css" />
        <title>Dian Xiao</title>
      </Head>
    <div className="container mx-auto max-w-4xl p-5 sm:p-6 md:p-10">
        <Header />
        <ul className="divide-y m-0 p-0">
          {posts.map(
              ({ _id, title = '', slug = '', publishedAt = '' }) =>
                slug && (
                  <li className="flex justify-between font-sans items-center py-2" key={_id}>
                    <Link href="/posts/[slug]" as={`/posts/${slug.current}`}>
                      <a className="cursor-pointer text-2xl no-underline pr-2">{title}</a>
                    </Link>{' '}
                    <span className="text-gray-600">{new Date(publishedAt).toLocaleDateString('en-US')}</span>
                  </li>
                )
          )}
        </ul>

      </div>

  </div>)
}

Home.getInitialProps = async () => ({
    posts: await client.fetch(groq`
      *[_type == "post"]|order(publishedAt desc)
    `)
})

export default Home

