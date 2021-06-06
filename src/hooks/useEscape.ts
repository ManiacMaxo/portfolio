import { useEffect } from 'react'

const useEscape = (callback: () => void): void => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key !== 'Escape') return
            callback()
        }

        window.addEventListener('keydown', handleEsc)

        return () => window.removeEventListener('keydown', handleEsc)
    }, [])
}

export { useEscape }
