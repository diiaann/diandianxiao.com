import Head from 'next/head'
import client from '../../client'
import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import Header from '../../components/header'
import Rating from '../../components/rating'


const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}


const Stuff = (props) => {
  const {
    title = 'Missing title',
    productImage = '',
    publishedAt = '',
    brand = '',
    sizeVariant = '',
    cost = '',
    link = '',
    rating = 0,
    description = []
  } = props 

  return (
    <div>
      <Head>
		    <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6338032/7337432/css/fonts.css" />
        <title>Dian Xiao</title>
      </Head>

      <Header />

      <div className="container mx-auto max-w-4xl px-5 sm:px-6 md:px-10 mb-10">
        <div className="max-w-8xl grid grid-cols-12 gap-x-4">
          <div className="col-span-12 md:col-span-5">
            <img
              className="cursor-pointer"
              src={urlFor(productImage)
                .url()}
            />
          </div>
          <div className="col-span-12 md:col-span-7">
            <h4 className="font-normal pb-0 text-sm mb-1">{brand}</h4>
            <h3 className="border-b border-solid">{title}</h3>
            <div className="pb-3">{rating!=0 && <Rating rating={rating}/>}</div>
            <PortableText
              value={description}
              imageOptions={{fit: 'max' }}
              {...client.config()}
            />
            <a href={link}>More info</a>
          </div>
        </div>
      </div>
    </div>
  )
}

Stuff.getInitialProps = async function(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(`
    *[_type == "stuff" && slug.current == $slug][0]
  `, { slug })
}

export default Stuff
