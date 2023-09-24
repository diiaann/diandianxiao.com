// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: "jk66xbay",
  dataset: 'production',
  useCdn: true
})
