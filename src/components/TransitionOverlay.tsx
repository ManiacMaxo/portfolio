import { gsap } from 'gsap'
import React, { useEffect, useRef } from 'react'

interface Props {
    direction?: 'top' | 'left'
}

const TransitionOverlay: React.FC<Props> = (props) => {
    const tl = useRef(gsap.timeline({ ease: 'power4.inOut' }))
    const toLeft = props.direction === 'left'
    const target = '.transition-overlay .tile'
    const animOptions = {
        duration: 0.4,
        delay: 0.2,
        stagger: 0.05
    }

    useEffect(() => {
        tl.current.set('.transition-overlay', {
            flexDirection: toLeft ? 'column' : 'row',
            alignItems: 'flex-end'
        })

        tl.current.to(target, {
            ...animOptions,
            stagger: -animOptions.stagger,
            width: 0
        })

        tl.current.set('.transition-overlay', {
            alignItems: 'flex-start'
        })

        // return () => {
        //     tl.current.to(target, {
        //         ...animOptions,
        //         width: '100%'
        //     })
        // }
    }, [])

    return (
        <div className='transition-overlay'>
            <div className='tile' />
            <div className='tile' />
            <div className='tile' />
            <div className='tile' />
            <div className='tile' />
        </div>
    )
}

TransitionOverlay.defaultProps = {
    direction: 'left'
}

export { TransitionOverlay }
