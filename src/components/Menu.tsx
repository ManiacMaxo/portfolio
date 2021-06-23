import { gsap } from 'gsap'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { socials } from '../lib/constants'

interface Props {
    isOpen: boolean
}

const Menu: React.FC<Props> = (props) => {
    const links = [
        {
            name: 'About',
            href: '/about'
        },
        {
            name: 'Projects',
            href: '/'
        },
        {
            name: 'Contact',
            href: '#'
        }
    ]

    const tl = useRef(gsap.timeline({ paused: true }))

    useEffect(() => {
        tl.current
            .to('.menu-overlay', { width: '100%' })
            .from('.menu-link > .title', {
                y: '100px'
            })
            .from('.menu-footer', {
                x: '-100%'
            })
            .reverse()
    }, [])

    useEffect(() => {
        tl.current.reversed(!props.isOpen)
    }, [props.isOpen])

    return (
        <div className='menu-overlay'>
            <div className='menu-content'>
                <ul className='menu-list'>
                    {links.map((link) => (
                        <li className='menu-link' key={link.name}>
                            <Link href={link.href}>
                                <a className='title'>{link.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>

                <footer className='menu-footer'>
                    <span>Socials</span>
                    <div className='menu-social-links'>
                        {socials.map((social, idx) => (
                            <>
                                <a
                                    key={social.name}
                                    href={social.href}
                                    rel='noreferrer noopener'
                                    target='_blank'
                                    className='underlined'
                                >
                                    {social.name}
                                </a>
                                {idx !== socials.length - 1 && ' / '}
                            </>
                        ))}
                    </div>
                </footer>
            </div>
        </div>
    )
}

export { Menu }
