import { motion, useViewportScroll } from 'framer-motion'
import React from 'react'
import styles from './ScrollProgress.module.scss'

interface Props {
    start?: number
    end: number
}

const ScrollProgress: React.FC<Props> = (props) => {
    const { scrollYProgress } = useViewportScroll()

    return (
        <div className={styles.wrapper}>
            <motion.div
                className={styles.bar}
                style={{ width: `${scrollYProgress}%` }}
            />
            <div className={styles.start}>
                {props.start.toString().padStart(2, '0')}
            </div>
            <div className={styles.end}>
                {props.end.toString().padStart(2, '0')}
            </div>
        </div>
    )
}

ScrollProgress.defaultProps = {
    start: 1
}

export { ScrollProgress }
