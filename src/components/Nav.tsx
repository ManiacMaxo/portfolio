import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Menu } from './Menu'

interface Props {
    dark?: boolean
    light?: boolean
}

const Nav: React.FC<Props> = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const { pathname } = useRouter()

    const onClick = () => setIsOpen((prev) => !prev)

    return (
        <>
            <Menu isOpen={isOpen} />
            <nav className='nav-bar container'>
                <div
                    className={classNames('logo', {
                        white: isOpen || props.light
                    })}
                >
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
