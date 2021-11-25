import { links, socials } from '@/lib/constants'
import { motion, MotionConfig, Variants } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

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
                    className='w-screen h-screen pointer-events-none md:w-1/2'
                    onClick={(e) => e.stopPropagation()}
                >
                    <motion.div
                        className='relative flex items-center h-full overflow-x-hidden pointer-events-auto text-secondary bg-primary-800'
                        variants={content}
                        initial={{ width: 0 }}
                    >
                        <ul className='flex flex-col w-full pl-container-outside'>
                            {links.map((link) => (
                                <li
                                    key={link.name}
                                    className='overflow-hidden cursor-pointer w-max font-heading-wide'
                                >
                                    <Link href={link.href} passHref>
                                        <motion.a
                                            className='relative block text-3xl hover:outline-text title'
                                            variants={linkVariant}
                                        >
                                            {link.name}
                                        </motion.a>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <motion.footer
                            className='absolute bottom-0 left-0 pb-24 pl-container-outside'
                            variants={footer}
                        >
                            <span>Socials</span>
                            <div className='mt-2 mb-3 overflow-x-hidden text-sm whitespace-nowrap'>
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
