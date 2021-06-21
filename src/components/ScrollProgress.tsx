import React, { useEffect } from 'react'

interface Props {
    start?: number
    end: number
}

const ScrollProgress: React.FC<Props> = (props) => {
    let height = 0

    const onScroll = () => {
        const scrollY = window.pageYOffset || document.body.scrollTop || 0
        const scroll = (scrollY / height) * 100

        gsap.to('.progress-child', { width: `${scroll}%` })
    }

    useEffect(() => {
        document.addEventListener('scroll', onScroll)

        const { body, documentElement } = document

        height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            documentElement.clientHeight,
            documentElement.scrollHeight,
            documentElement.offsetHeight
        )

        return () => {
            document.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <div className='progress-parent'>
            <div className='progress-child' />
            <div className='progress-start'>
                {props.start < 10 && '0' + props.start}
            </div>
            <div className='progress-end'>
                {props.end < 10 && '0' + props.end}
            </div>
        </div>
    )
}

ScrollProgress.defaultProps = {
    start: 1
}

export { ScrollProgress }
