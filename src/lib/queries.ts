const projectFields = `
  "id": _id,
  title,
  mainImage,
  slug,
`

export const indexQuery = `
*[_type == "project"] | order(_updatedAt desc) {
  description,
  "tags": tags[]->title,
  ${projectFields}
}`

export const projectBySlugQuery = `
*[_type == "project" && slug == $slug][0] {
  body,
  link,
  ${projectFields}
}`
