export class Route {
    public name: string
    public href: string

    constructor(name: string, href?: string) {
        this.name = name
        this.href = href ?? `/${name.toLocaleLowerCase().replace(' ', '-')}`
    }
}
