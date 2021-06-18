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
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Exo+2:wght@800&family=Prompt:wght@200;300;400;700&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document
