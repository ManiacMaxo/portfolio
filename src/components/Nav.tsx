import classNames from 'classnames'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BurgerButton } from './BurgerButton'
import { Menu } from './Menu'

interface Props {
    light?: boolean
}

const Nav: React.FC<Props> = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen((prev) => !prev)

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    }, [isOpen])

    return (
        <motion.header animate={isOpen ? 'open' : 'closed'}>
            <Menu onClose={() => setIsOpen(false)} />
            <nav
                className={classNames(
                    'container pt-8 lg:pt-14 fixed inset-0 bottom-auto flex items-center justify-between z-50',
                    props.light ? 'text-primary-50' : 'text-primary-400'
                )}
            >
                <div className='lowercase font-black text-xl transition-colors duration-400 ease-linear'>
                    <Link href='/'>
                        <a>Victor Gorchilov</a>
                    </Link>
                </div>
                <BurgerButton onClick={toggle} />
            </nav>
        </motion.header>
    )
}

export { Nav }
