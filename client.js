// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2023-09-21',
  dataset: 'production',
  useCdn: true
})
