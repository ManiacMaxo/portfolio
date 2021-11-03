import { motion, MotionConfig, Variants } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { links, socials } from '../lib/constants'

interface Props {
    onClose: () => void
}

const Menu: React.FC<Props> = (props) => {
    const overlay: Variants = {
        open: {
            width: '100%'
        },
        closed: {
            width: 0,
            transition: {
                when: 'afterChildren'
            }
        }
    }

    const content: Variants = {
        open: {
            width: '100%',
            transition: {
                duration: 0.3,
                when: 'beforeChildren',
                delayChildren: 0.2
            }
        },
        closed: {
            width: 0,
            transition: {
                duration: 0.3,
                when: 'afterChildren'
            }
        }
    }

    const linkVariant: Variants = {
        open: {
            y: 0
        },
        closed: {
            y: '100px',
            transition: {
                delay: 0.5
            }
        }
    }

    const footer: Variants = {
        open: {
            x: 0,
            transition: {
                delay: 0.8
            }
        },
        closed: { x: '-150%' }
    }

    return (
        <MotionConfig transition={{ duration: 0.5 }}>
            <motion.div
                className='fixed inset-0 right-auto z-50 w-0 bg-secondary bg-opacity-70'
                onClick={props.onClose}
                variants={overlay}
                transition={{
                    default: {
                        duration: 0.5
                    }
                }}
            >
                <div
                    className='h-screen pointer-events-none w-screen md:w-1/2'
                    onClick={(e) => e.stopPropagation()}
                >
                    <motion.div
                        className='h-full pointer-events-auto overflow-x-hidden relative flex items-center text-secondary bg-primary-800'
                        variants={content}
                        initial={{ width: 0 }}
                    >
                        <ul className='pl-container-outside w-full flex flex-col'>
                            {links.map((link) => (
                                <li
                                    key={link.name}
                                    className='w-max font-heading-wide overflow-hidden cursor-pointer'
                                >
                                    <Link href={link.href}>
                                        <motion.a
                                            className='relative block hover:outline-text title text-3xl'
                                            variants={linkVariant}
                                        >
                                            {link.name}
                                        </motion.a>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <motion.footer
                            className='pl-container-outside pb-24 absolute bottom-0 left-0'
                            variants={footer}
                        >
                            <span>Socials</span>
                            <div className='text-sm mt-2 mb-3 overflow-x-hidden whitespace-nowrap'>
                                {socials.map((social, idx) => (
                                    <React.Fragment key={social.name}>
                                        <a
                                            href={social.href}
                                            rel='noreferrer noopener'
                                            target='_blank'
                                            className='underlined'
                                        >
                                            {social.name}
                                        </a>
                                        {idx !== socials.length - 1 && ' / '}
                                    </React.Fragment>
                                ))}
                            </div>
                        </motion.footer>
                    </motion.div>
                </div>
            </motion.div>
        </MotionConfig>
    )
}

export { Menu }
