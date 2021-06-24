import { motion, MotionConfig } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { socials } from '../../lib/constants'
import styles from './Menu.module.scss'

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

    const overlay = {
        open: {
            width: '100%',
            transition: {
                when: 'beforeChildren',
                duration: 0.5,
                delayChildren: 0.2
            }
        },
        closed: {
            width: '0',
            transition: {
                when: 'afterChildren'
            }
        }
    }

    const linkVariant = {
        open: {
            y: '0'
        },
        closed: {
            y: '100px',
            transition: {
                delay: 0.5
            }
        }
    }

    const footer = {
        open: {
            x: '0',
            transition: {
                delay: 0.8
            }
        },
        closed: { x: '-150%' }
    }

    return (
        <MotionConfig transition={{ duration: 0.5 }}>
            <motion.div
                className={styles.overlay}
                animate={props.isOpen ? 'open' : 'closed'}
                variants={overlay}
                transition={{
                    default: {
                        duration: 0.5
                    }
                }}
            >
                <div className={styles.content}>
                    <ul className={styles.list}>
                        {links.map((link) => (
                            <li key={link.name} className={styles.link}>
                                <Link href={link.href}>
                                    <motion.a
                                        className='title'
                                        variants={linkVariant}
                                    >
                                        {link.name}
                                    </motion.a>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <motion.footer className={styles.footer} variants={footer}>
                        <span>Socials</span>
                        <div className={styles['social-links']}>
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
                    </motion.footer>
                </div>
            </motion.div>
        </MotionConfig>
    )
}

export { Menu }
