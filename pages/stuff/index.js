import Head from 'next/head'
import client from '../../client'
import Link from 'next/link'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import Header from '../../components/header'


function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

function StuffIndex(props) {
  const { stuffs = [] } = props

  return (

    <div>
      <Head>
		    <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6338032/7337432/css/fonts.css" />
        <title>Dian Xiao</title>
      </Head>
        <Header />
        <div className="container mx-auto max-w-4xl p-5 sm:p-6 md:p-10">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
              {stuffs.map(
                  ({ _id, title = '', slug = '', productImage = '', brand ='' }) =>
                    slug && (
                      <div className="flex flex-col" key={_id}>
                        {productImage && (
                          <div>
                            <Link href="/stuff/[slug]" as={`/stuff/${slug.current}`}>
                              <img
                                className="cursor-pointer"
                                src={urlFor(productImage)
                                  .width(500)
                                  .height(500)
                                  .url()}
                              />
                            </Link>
                          </div>
                        )}
                        <div className="font-sans py-2">
                          <h4 className="font-normal pb-0 text-xs mb-1">{brand}</h4>
                          <Link className="cursor-pointer text-lg no-underline pr-2" href="/stuff/[slug]" as={`/stuff/${slug.current}`}>
                            {title}
                          </Link>{' '}
                        </div>
                      </div>
                    )
              )}
            </div>

      </div>

  </div>)
}

StuffIndex.getInitialProps = async () => ({
    stuffs: await client.fetch(groq`
      *[_type == "stuff"]|order(publishedAt desc)
    `)
})

export default StuffIndex
