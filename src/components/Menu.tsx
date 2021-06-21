import Link from 'next/link'
import React from 'react'
import { socials } from '../lib/constants'

interface Props {
    isOpen: boolean
}

const Menu: React.FC<Props> = () => {
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

    // useEffect(() => {
    //     gsap.to('.menu-overlay', { width: props.isOpen ? 0 : '100%' })
    // }, [props.isOpen])

    return (
        <div className='menu-overlay'>
            <div className='menu-content'>
                <ul className='menu-list'>
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href}>
                                <a className='menu-link title'>{link.name}</a>
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
