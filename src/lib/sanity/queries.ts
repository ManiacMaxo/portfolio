import groq from 'groq'

const projectFields = `
  _id,
  title,
  slug,
  mainImage,
`

const awardsFields = `
  _id,
  name,
  date,
`

export const indexQuery = groq`
*[_type == "project"] | order(score desc) {
  ${projectFields}
}`

export const projectBySlugQuery = groq`
*[_type == "project" && slug == $slug][0] {
  body,
  link,
  images,
  ${projectFields}
}`

export const awardsQuery = groq`
*[_type == "award"] {
  ${awardsFields}
}`
