import Head from 'next/head'
import client from '../../client'
import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import Header from '../../components/header'


const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const smallcaps = props => (
  <span style={{  fontFamily: '"Chronicle SSm SC A", "Chronicle SSm SC B"', fontSize: "1.8rem", fontVariant: 'small-caps' }}>{props.children}</span>
)

const ImageComponent = ({value}) => {
  const {width, height} = getImageDimensions(value)
  return (
    <figure>
      <img
        src={urlFor().image(value.asset).width(800).fit('max').auto('format').url()}
        alt={value.alt || ' '}
        loading="lazy"
        style={{
          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    {value.caption && <figcaption>{value.caption}</figcaption>}
    </figure>
  )
}

const Post = (props) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    publishedAt = '',
    body = []
  } = props 

  return (
    <div>
      <Head>
		    <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6338032/7337432/css/fonts.css" />
        <title>Dian Xiao</title>
      </Head>

      <Header />

      <article className="container mx-auto max-w-4xl px-5 sm:px-6 md:px-10 mb-10">
        <h1>{title}</h1>
        <PortableText
          value={body}
          imageOptions={{fit: 'max' }}
          components={{
            types: {
              marks: {smallcaps},
              image: ImageComponent 
            }
          }}
          {...client.config()}
        />
      </article>
    </div>
  )
}

Post.getInitialProps = async function(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]
  `, { slug })
}

export default Post
