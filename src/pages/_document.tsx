import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import theme from '../theme'

class Document extends NextDocument {
    render(): JSX.Element {
        return (
            <Html lang='en'>
                <Head>
                    <meta charSet='utf-8' />
                    <link rel='manifest' href='/manifest.json' />
                    <meta name='theme-color' content='#a8d0e6' />
                    <link
                        rel='apple-touch-icon'
                        href='/images/icons/logo-96x96.png'
                    />
                    <meta
                        name='apple-mobile-web-app-status-bar'
                        content='#a8d0e6'
                    />
                </Head>
                <body>
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document
