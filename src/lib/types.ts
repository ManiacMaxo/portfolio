export interface IArticle {
    id: string
    title: string
    description: string
    href: string
    img: string
    tags?: string[]
}

export interface IArticleContent {
    title: string
    imgUrl: string
    body: any
    link: string
}

export class Route {
    public name: string
    public href: string

    constructor(name: string, href?: string) {
        this.name = name
        this.href = href ?? `/${name.toLocaleLowerCase().replace(' ', '-')}`
    }
}
