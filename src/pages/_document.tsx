import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

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
                    <link
                        href='https://fonts.googleapis.com/css2?family=Playfair+Display&family=Source+Code+Pro:wght@400;700&family=Work+Sans:wght@400;700;800;900&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document
