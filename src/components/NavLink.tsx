import withRouter, { WithRouterProps } from 'next/dist/client/with-router'
import Link, { LinkProps } from 'next/link'
import React, { Children, PropsWithChildren } from 'react'

interface Props extends WithRouterProps, PropsWithChildren<LinkProps> {
    activeClassName?: string
}

const NavLink = withRouter<Props>((props) => {
    const child = Children.only(props.children) as JSX.Element

    const { activeClassName, router, ...rest } = props

    let className = child.props.className || ''
    if (router.pathname === props.href && activeClassName) {
        className = `${className} ${activeClassName}`.trim()
    }

    return <Link {...rest}>{React.cloneElement(child, { className })}</Link>
})

export { NavLink }
