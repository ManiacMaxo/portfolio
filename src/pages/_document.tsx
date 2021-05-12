import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet='utf-8' />
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
