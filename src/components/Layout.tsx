import Head from 'next/head'
import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header/Header'

interface Props {
    title?: string
    description?: string
}

const Layout: React.FC<Props> = (props): JSX.Element => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name='description' content={props.description} />

                <meta
                    property='og:url'
                    content='https://victor.gorchilov.net/'
                />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={props.title} />
                <meta property='og:description' content={props.description} />
                {/* <meta property='og:image' content='' /> */}

                <meta name='twitter:card' content='summary_large_image' />
                <meta
                    property='twitter:domain'
                    content='victor.gorchilov.net'
                />
                <meta
                    property='twitter:url'
                    content='https://victor.gorchilov.net/'
                />
                <meta name='twitter:title' content={props.title} />
                <meta name='twitter:description' content={props.description} />
                {/* <meta name='twitter:image' content='' /> */}
            </Head>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

Layout.defaultProps = {
    title: "Victor Gorchilov - Student & Web Developer's portfolio",
    description:
        "I'm just a student trying to make the most out of my computer. I create brilliant digital experiences in a treacherous world."
}

export { Layout }
