import { motion, MotionConfig, Variants } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { links, socials } from '../../lib/constants'
import styles from './Menu.module.scss'

const Menu: React.FC = () => {
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
                className={styles.overlay}
                variants={overlay}
                transition={{
                    default: {
                        duration: 0.5
                    }
                }}
            >
                <div className={styles.wrapper}>
                    <motion.div
                        className={styles.content}
                        variants={content}
                        initial={{ width: 0 }}
                    >
                        <ul className={styles.list}>
                            {links.map((link) => (
                                <li key={link.name} className={styles.item}>
                                    <Link href={link.href}>
                                        <motion.a
                                            className={`${styles.link} title`}
                                            variants={linkVariant}
                                        >
                                            {link.name}
                                        </motion.a>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <motion.footer
                            className={styles.footer}
                            variants={footer}
                        >
                            <span>Socials</span>
                            <div className={styles['social-links']}>
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
