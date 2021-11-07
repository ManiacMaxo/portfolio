import { useEffect, useState } from 'react'

const getWindowSize = () => {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height
    }
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
    const handleResize = () => setWindowSize(getWindowSize())

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}
