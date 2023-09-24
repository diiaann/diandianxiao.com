import Head from 'next/head'
import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import Header from '../components/header'

function Home(props) {
  const { posts = [] } = props

  return (

    <div>
      <Head>
        <title>Dian Xiao</title>
      </Head>
      <Header />
      <div className="container mx-auto max-w-4xl px-5 sm:px-6 md:px-10 mb-10">
        <ul className="list-none divide-y m-0 p-0">
          {posts.map(
              ({ _id, title = '', slug = '', publishedAt = '' }) =>
                slug && (
                  <li className="py-4" key={_id}>
                    <Link className="cursor-pointer text-4xl no-underline pr-2 text-gray-800" href="/posts/[slug]" as={`/posts/${slug.current}`}>
                       {title}
                    </Link>{' '}
                    <div className="text-gray-600 text-xs pt-2">{new Date(publishedAt).toLocaleDateString('en-US')}</div>
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

