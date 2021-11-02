import React, { useEffect, useState } from 'react'
import { ThemeContext } from '.'

const ThemeContextProvider: React.FC = (props) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        const html = document.querySelector('html')
        html.classList.add(theme)
        html.classList.remove(theme === 'dark' ? 'light' : 'dark')
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider }
