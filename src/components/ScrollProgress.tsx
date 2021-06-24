import { motion, useViewportScroll } from 'framer-motion'
import React from 'react'

interface Props {
    start?: number
    end: number
}

const ScrollProgress: React.FC<Props> = (props) => {
    const { scrollYProgress } = useViewportScroll()

    return (
        <div className='progress-parent'>
            <motion.div
                className='progress-child'
                style={{ width: `${scrollYProgress}%` }}
            />
            <div className='progress-start'>
                {props.start.toString().padStart(2, '0')}
            </div>
            <div className='progress-end'>
                {props.end.toString().padStart(2, '0')}
            </div>
        </div>
    )
}

ScrollProgress.defaultProps = {
    start: 1
}

export { ScrollProgress }
