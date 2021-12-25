import Head from 'next/head'
import client from '../../client'
import BlockContent from '@sanity/block-content-to-react'
import Header from '../../components/header'


const smallcaps = props => (
  <span style={{  fontFamily: '"Chronicle SSm SC A", "Chronicle SSm SC B"', fontSize: "1.8rem", fontVariant: 'small-caps' }}>{props.children}</span>
)

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
		    <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6338032/7263032/css/fonts.css" />
        <title>Dian Xiao</title>
      </Head>

      <div className="container mx-auto max-w-4xl p-5 sm:p-6 md:p-10">
        <Header />
      </div>

      <article className="container mx-auto max-w-4xl px-5 sm:px-6 md:px-10 mb-10">
        <h1 className="border-b border-solid">{title}</h1>
        <BlockContent
          blocks={body}
          imageOptions={{fit: 'max' }}
          serializers={{marks: {smallcaps}}}
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
