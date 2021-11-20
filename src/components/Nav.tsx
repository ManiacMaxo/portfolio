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
            <nav className='container fixed inset-0 bottom-auto z-50 flex items-center pt-8 uppercase select-none lg:pt-14 dark:mix-blend-difference'>
                <div className='flex-1'>
                    <span onClick={toggleTheme}>
                        {`${theme === 'dark' ? 'light' : 'dark'}?`}
                    </span>
                </div>

                <NavLink href='/'>
                    <a className='font-heading font-black text-[5vw] md:text-3xl hover:scale-110 transfrom transition-transform leading-none'>
                        Victor Gorchilov
                    </a>
                </NavLink>
                <div className='flex justify-end flex-1 gap-6'>
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
