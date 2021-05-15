import { usePrefersReducedMotion } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './NavLink.module.scss'

interface Props {
    name: string
    href: string
    isAnimated?: boolean
}

const NavLink: React.FC<Props> = (props) => {
    const prefersReducedMotion = usePrefersReducedMotion()
    const animated = !prefersReducedMotion && props.isAnimated

    const [active, setActive] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (!router.isReady) return
        if (router.asPath !== props.href) return setActive(false)
        setActive(true)
    }, [router])

    return (
        <Link href={props.href}>
            <a
                className={[
                    styles.link,
                    animated ? styles.animated : styles.static,
                    active ? styles.active : ''
                ]
                    .join(' ')
                    .trim()}
            >
                {animated ? (
                    <span>
                        {props.name
                            .trim()
                            .split('')
                            .map((letter: string, idx: number) => (
                                <p key={letter + idx}>{letter}</p>
                            ))}
                    </span>
                ) : (
                    props.name
                )}
            </a>
        </Link>
    )
}

export { NavLink }
