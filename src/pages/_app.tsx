import { AppProps } from 'next/app'
import React from 'react'
import '../styles/global.scss'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const AppWrapper = ({ Component, pageProps }: AppProps): JSX.Element => {
    gsap.registerPlugin(ScrollTrigger)

    return <Component {...pageProps} />
}

export default AppWrapper
