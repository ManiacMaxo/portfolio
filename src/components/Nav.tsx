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

    const clickableStyles =
        'hover:opacity-70 transition-opacity text-sm lg:text-md leading-none w-max'

    return (
        <motion.header animate={isOpen ? 'open' : 'closed'}>
            <nav className='container pt-8 lg:pt-14 fixed inset-0 bottom-auto flex items-center uppercase z-50 select-none dark:mix-blend-difference'>
                <div className='flex-1 cursor-default'>
                    <span className={clickableStyles} onClick={toggleTheme}>
                        {`${theme === 'dark' ? 'light' : 'dark'}?`}
                    </span>
                </div>

                <NavLink href='/'>
                    <a className='font-heading font-black text-[5vw] md:text-3xl hover:scale-110 transfrom transition-transform leading-none'>
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
                                <a className={clickableStyles}>About</a>
                            </NavLink>
                            <NavLink href='/contact'>
                                <a className={clickableStyles}>Contact</a>
                            </NavLink>
                        </>
                    )}
                </div>
            </nav>
        </motion.header>
    )
}

export { Nav }
