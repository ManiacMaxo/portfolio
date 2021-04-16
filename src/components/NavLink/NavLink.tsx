import React from 'react'
import { NavLink as ReactNavLink } from 'react-router-dom'
import styles from './NavLink.module.scss'

interface Props {
    name: string
    href: string
    isAnimated?: boolean
}

const NavLink: React.FC<Props> = (props) => {
    return (
        <ReactNavLink
            exact
            to={props.href}
            activeClassName={styles.active}
            className={[
                styles.link,
                props.isAnimated ? styles.animated : styles.static
            ].join(' ')}
        >
            {props.isAnimated ? (
                <span>
                    {props.name
                        .trim()
                        .split('')
                        .map((letter: string, idx: number) => (
                            <p
                                key={letter + idx}
                                style={{ transitionDelay: `${idx / 25}s` }}
                            >
                                {letter}
                            </p>
                        ))}
                </span>
            ) : (
                props.name
            )}
        </ReactNavLink>
    )
}

export { NavLink }
