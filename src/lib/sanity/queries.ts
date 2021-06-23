const projectFields = `
  _id,
  title,
  slug,
  mainImage

`

export const indexQuery = `
*[_type == "project"] | order(score desc) {
  ${projectFields}
}`

export const projectBySlugQuery = `
*[_type == "project" && slug == $slug][0] {
  body,
  link,
  images,
  ${projectFields}
}`
