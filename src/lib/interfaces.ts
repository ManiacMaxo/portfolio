export interface IProject {
    _id: string
    title: string
    slug: string
    body: any
    imgUrl: string
    links: any[]
    start: string
    end: string
    tags: string[]
}

export interface IAward {
    _id: string
    name: string
    date: Date
}
