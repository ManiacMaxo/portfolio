import { AppProps } from 'next/app'
import React from 'react'
import { Layout } from '../components'
import theme from '../theme'
import '../style/style.scss'
import { ChakraProvider } from '@chakra-ui/react'

const AppWrapper: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}

export default AppWrapper
