import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import React from 'react'
import { TransitionOverlay } from '../components'
import { ThemeContextProvider } from '../context'
import '../styles/global.scss'

const AppWrapper = ({
    Component,
    pageProps,
    router
}: AppProps): JSX.Element => {
    return (
        <AnimatePresence exitBeforeEnter>
            <ThemeContextProvider>
                <TransitionOverlay key={router.route} direction='left' />
                <Component {...pageProps} />
            </ThemeContextProvider>
        </AnimatePresence>
    )
}

export default AppWrapper
