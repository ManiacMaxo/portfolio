import React, { useEffect, useState } from 'react'
import { ThemeContext } from '.'

export type Theme = 'light' | 'dark'

const ThemeContextProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').matches &&
            setTheme('dark')
    }, [])

    useEffect(() => {
        const html = document.documentElement
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
