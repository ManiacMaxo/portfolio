import cx from 'classnames/bind'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu } from '../Menu'
import styles from './Nav.module.scss'

const classNames = cx.bind(styles)

interface Props {
    dark?: boolean
    light?: boolean
}

const Nav: React.FC<Props> = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const onClick = () => setIsOpen((prev) => !prev)

    return (
        <>
            <Menu isOpen={isOpen} />
            <nav className={[styles.root, 'container'].join(' ')}>
                <div
                    className={classNames(styles.logo, {
                        white: isOpen || (props.light && !props.dark)
                    })}
                >
                    <Link href='/'>
                        <a>Victor Gorchilov</a>
                    </Link>
                </div>
                <div
                    className={classNames('burger-btn', {
                        active: isOpen
                    })}
                    onClick={onClick}
                >
                    <div className={styles.open}>
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className={styles.close} />
                </div>
            </nav>
        </>
    )
}

export { Nav }
