import { motion } from 'framer-motion'
import React from 'react'
import styles from './Transition.module.scss'

interface Props {
    direction?: 'top' | 'left'
}

const TransitionOverlay: React.FC<Props> = () => {
    const overlay = {
        enter: {},
        exit: {}
    }

    return (
        <motion.div
            className={styles.overlay}
            initial={false}
            variants={overlay}
            style={{ display: 'none' }}
        >
            <div className={styles.tile} />
            <div className={styles.tile} />
            <div className={styles.tile} />
            <div className={styles.tile} />
            <div className={styles.tile} />
        </motion.div>
    )
}

TransitionOverlay.defaultProps = {
    direction: 'left'
}

export { TransitionOverlay }
