/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react'

interface IThemeContext {
    theme: 'light' | 'dark'
    toggleTheme: () => void
}

const ThemeContext = createContext<IThemeContext>({
    theme: 'light',
    toggleTheme: () => {}
})

export { ThemeContext }
