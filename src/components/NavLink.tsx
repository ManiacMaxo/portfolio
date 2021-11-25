import Link, { LinkProps } from 'next/link'
import { NextRouter, withRouter } from 'next/router'
import React, { Children, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren<LinkProps> {
    activeClassName?: string
    router: NextRouter
}

const BaseLink: React.FC<Props> = (props) => {
    const { activeClassName, router, ...rest } = props
    const child = Children.only(props.children) as JSX.Element

    let className = child.props.className || ''
    if (router.asPath === props.href && activeClassName) {
        className = `${className} ${activeClassName}`.trim()
    }

    return <Link {...rest}>{React.cloneElement(child, { className })}</Link>
}

const NavLink = withRouter(BaseLink)

export { NavLink }
