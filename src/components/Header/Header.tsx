import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

interface Props {}

const Header: React.FC<Props> = () => {
    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' }
    ]
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div>Gorchilov</div>
                <nav className={styles.nav}>
                    {links.map((link) => (
                        <NavLink to={link.href}>{link.name}</NavLink>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default Header
