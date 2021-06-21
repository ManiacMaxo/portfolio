import React, { useEffect } from 'react'
import { gsap } from 'gsap'

interface Props {
    ease?: number
}

const SideScroll: React.FC<Props> = (props) => {
    const options = {
        target: '.scroll-wrapper',
        ease: props.ease,
        x: 0,
        endX: 0,
        resizeRequest: 1,
        scrollRequest: 0
    }

    let requestId: number = null

    const onScroll = () => {
        options.scrollRequest++

        console.log('scroll')

        if (!requestId) requestId = requestAnimationFrame(updateScroller)
    }

    const updateScroller = () => {
        const scroll = window.pageYOffset || document.body.scrollTop || 0

        console.log(scroll)

        options.endX = scroll
        options.x += (scroll - options.x) * options.ease

        gsap.set(options.target, { x: -options.x })

        requestId =
            options.scrollRequest > 0 ? requestAnimationFrame(onScroll) : null
    }

    const onResize = () => {}

    useEffect(() => {
        document.addEventListener('scroll', onScroll)
        window.addEventListener('resize', onResize)

        return () => {
            document.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return <main className='scroll-wrapper'>{props.children}</main>
}

SideScroll.defaultProps = {
    ease: 0.05
}

export { SideScroll }
