import { motion, useViewportScroll } from 'framer-motion'
import React from 'react'

const SideScroll: React.FC = (props) => {
    const { scrollYProgress } = useViewportScroll()
    const numChildren = React.Children.count(props.children)
    const width = (numChildren - 1) * 100

    return (
        <motion.div
            className='scroll-wrapper'
            style={{ x: `-${scrollYProgress.get() * width}vw` }}
        >
            {props.children}
        </motion.div>
    )
}

export { SideScroll }
