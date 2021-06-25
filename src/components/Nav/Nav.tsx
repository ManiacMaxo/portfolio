import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { BurgerButton } from '../BurgerButton'
import { Menu } from '../Menu'
import styles from './Nav.module.scss'

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen((prev) => !prev)

    return (
        <motion.header animate={isOpen ? 'open' : 'closed'}>
            <Menu />
            <nav className={[styles.root, 'container'].join(' ')}>
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
