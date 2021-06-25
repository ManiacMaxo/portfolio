import { HTMLMotionProps, motion, MotionConfig, Variants } from 'framer-motion'
import React from 'react'
import styles from './Transition.module.scss'

interface Props {
    direction?: 'top' | 'left'
}

const Tile: React.FC<HTMLMotionProps<'div'>> = (props) => {
    return <motion.div className={styles.tile} {...props} />
}

const TransitionOverlay: React.FC<Props> = (props) => {
    const overlay: Variants = {
        initial: {
            flexDirection: props.direction === 'left' ? 'column' : 'row',
            alignItems: 'flex-start'
        },
        enter: {
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        exit: {
            alignItems: 'flex-end',
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    }

    const tile: Variants = {
        initial: {
            width: '100%'
        },
        enter: {
            width: 0
        },
        exit: {
            width: '100%'
        }
    }

    return (
        <MotionConfig transition={{ duration: 0.4, ease: 'linear' }}>
            <motion.div
                className={styles.overlay}
                initial='initial'
                animate='enter'
                exit='exit'
                variants={overlay}
            >
                <Tile variants={tile} />
                <Tile variants={tile} />
                <Tile variants={tile} />
                <Tile variants={tile} />
                <Tile variants={tile} />
            </motion.div>
        </MotionConfig>
    )
}

TransitionOverlay.defaultProps = {
    direction: 'left'
}

export { TransitionOverlay }
