import { Nav } from '@/components/Nav'
import Head from 'next/head'
import React from 'react'

interface Props {
    title?: string
    description?: string
    image?: string
}

const Layout: React.FC<React.PropsWithChildren<Props>> = (props) => {
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
                {props.image && (
                    <meta property='og:image' content={props.image} />
                )}

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
                {props.image && (
                    <meta name='twitter:image' content={props.image} />
                )}
            </Head>

            <Nav />
            {props.children}
        </>
    )
}

Layout.defaultProps = {
    title: 'Victor Gorchilov',
    description:
        "I'm just a student trying to create brilliant digital experiences."
}

export { Layout }
