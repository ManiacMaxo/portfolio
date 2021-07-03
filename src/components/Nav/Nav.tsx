import cx from 'classnames/bind'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { BurgerButton } from '../BurgerButton'
import { Menu } from '../Menu'
import styles from './Nav.module.scss'

const classNames = cx.bind(styles)

const Nav: React.FC<{ light: boolean }> = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen((prev) => !prev)

    return (
        <motion.header animate={isOpen ? 'open' : 'closed'}>
            <Menu />
            <nav
                className={classNames('root', 'container', {
                    white: props.light
                })}
            >
                <div className={styles.logo}>
                    <Link href='/'>
                        <a>Victor Gorchilov</a>
                    </Link>
                </div>
                <BurgerButton toggle={toggle} />
            </nav>
        </motion.header>
    )
}

export { Nav }
