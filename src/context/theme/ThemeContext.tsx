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
