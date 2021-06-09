import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import theme from '../theme'

class Document extends NextDocument {
    render(): JSX.Element {
        return (
            <Html lang='en'>
                <Head>
                    <meta charSet='utf-8' />
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