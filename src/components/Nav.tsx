import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context'
import { useWindowSize } from '../hooks'
import { BurgerButton } from './BurgerButton'
import { NavLink } from './NavLink'

const Nav: React.FC = () => {
    const { width } = useWindowSize()
    const [isOpen, setIsOpen] = useState(false)
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <motion.header animate={isOpen ? 'open' : 'closed'}>
            <nav className='container pt-8 lg:pt-14 fixed inset-0 bottom-auto flex items-center uppercase z-50 select-none'>
                <span className='flex-1 cursor-default' onClick={toggleTheme}>
                    {`${theme === 'dark' ? 'light' : 'dark'}?`}
                </span>

                <NavLink href='/'>
                    <a className='font-heading font-black text-[5vw] md:text-3xl leading-none'>
                        Victor Gorchilov
                    </a>
                </NavLink>
                <div className='flex-1 flex gap-6 justify-end'>
                    {width < 768 ? (
                        <BurgerButton
                            onClick={() => setIsOpen((prev) => !prev)}
                        />
                    ) : (
                        <>
                            <NavLink href='/about'>
                                <a>About</a>
                            </NavLink>
                            <NavLink href='/contact'>
                                <a>Contact</a>
                            </NavLink>
                        </>
                    )}
                </div>
            </nav>
        </motion.header>
    )
}

export { Nav }
