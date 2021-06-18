import { AppProps } from 'next/app'
import React from 'react'
import '../styles/global.scss'

const AppWrapper = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}

export default AppWrapper
