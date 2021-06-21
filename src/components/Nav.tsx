import classNames from 'classnames'
import { gsap } from 'gsap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Menu } from './Menu'

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { pathname } = useRouter()

    const onClick = () => {
        gsap.to('.menu-overlay', { width: isOpen ? 0 : '100%' })
        setIsOpen((prev) => !prev)
    }

    return (
        <>
            <Menu isOpen={isOpen} />
            <nav className='nav-bar'>
                <div className='logo'>
                    {pathname === '/' ? (
                        'Victor Gorchilov'
                    ) : (
                        <Link href='/'>
                            <a>Victor Gorchilov</a>
                        </Link>
                    )}
                </div>
                <div
                    className={classNames('burger-btn', { active: isOpen })}
                    onClick={onClick}
                >
                    <div className='burger-btn-open'>
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className='burger-btn-close' />
                </div>
            </nav>
        </>
    )
}

export { Nav }
