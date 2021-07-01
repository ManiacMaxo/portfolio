import { HTMLMotionProps, motion, Variants } from 'framer-motion'
import React from 'react'

const Button: React.FC<HTMLMotionProps<'button'>> = (props) => {
    const button: Variants = {
        initial: {
            transform: 'scale(1) translate(0)'
        },
        clicked: {
            transform: 'scale(0.9) translate(0)'
        }
    }

    return (
        <motion.button
            variants={button}
            initial='initial'
            whileTap='clicked'
            transition={{ duration: 0.1 }}
            {...props}
        >
            {props.children}
        </motion.button>
    )
}

export { Button }
