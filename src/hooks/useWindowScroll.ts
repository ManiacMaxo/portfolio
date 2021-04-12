import { useEffect, useState } from 'react'

interface WindowScroll {
    scrollY: boolean
}

const useWindowScroll = (): WindowScroll => {
    const [scrollY, setScrollY] = useState<boolean>(false)

    useEffect(() => {
        const scrollHandler = () => setScrollY(Boolean(window.scrollY))

        scrollHandler()
        window.addEventListener('scroll', scrollHandler)

        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return { scrollY }
}

export { useWindowScroll }
