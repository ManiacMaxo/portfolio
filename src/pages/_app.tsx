import { AnimatePresence, motion } from 'framer-motion'
import { AppProps } from 'next/app'
import React from 'react'
import '../styles/global.scss'

const AppWrapper = ({
    Component,
    pageProps,
    router
}: AppProps): JSX.Element => {
    return (
        <AnimatePresence>
            <motion.div
                key={router.route}
                initial='initial'
                animate='enter'
                exit='exit'
                variants={{
                    initial: {
                        opacity: 0
                    },
                    enter: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    }
                }}
            >
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    )
}

export default AppWrapper
