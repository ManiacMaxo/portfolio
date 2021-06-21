import React, { useEffect } from 'react'
import { gsap } from 'gsap'

interface Props {
    start?: number
    end: number
}

const ScrollProgress: React.FC<Props> = (props) => {
    useEffect(() => {
        gsap.to('.progress-child', {
            width: '100%',
            scrollTrigger: {
                trigger: 'main',
                start: 0,
                end: 'bottom bottom',
                scrub: true
            }
        })
    }, [])

    return (
        <div className='progress-parent'>
            <div className='progress-child' />
            <div className='progress-start'>
                {props.start < 10 && '0' + props.start}
            </div>
            <div className='progress-end'>
                {props.end.toString().padStart(1, '0')}
            </div>
        </div>
    )
}

ScrollProgress.defaultProps = {
    start: 1
}

export { ScrollProgress }
