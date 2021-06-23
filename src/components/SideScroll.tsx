import { gsap } from 'gsap'
import React, { useEffect } from 'react'

const SideScroll: React.FC = (props) => {
    const numChildren = React.Children.count(props.children)
    const width = (numChildren - 1) * 100

    useEffect(() => {
        document.querySelector('main').style.height = `${width + 100}vw`

        gsap.to('.scroll-wrapper', {
            x: `-${width}vw`,
            scrollTrigger: {
                trigger: 'main',
                start: 0,
                end: 'bottom bottom',
                scrub: 1
            }
        })
    }, [])

    return <div className='scroll-wrapper'>{props.children}</div>
}

SideScroll.defaultProps = {
    ease: 0.05
}

export { SideScroll }
