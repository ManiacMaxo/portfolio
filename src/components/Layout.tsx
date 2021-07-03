import Head from 'next/head'
import React from 'react'
import { Nav } from './Nav'

interface Props {
    title?: string
    description?: string
    image?: string
    dark?: boolean
    light?: boolean
}

const Layout: React.FC<Props> = (props) => {
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

            <Nav light={props.light} />
            {props.children}
        </>
    )
}

Layout.defaultProps = {
    title: 'Victor Gorchilov',
    description:
        "I'm just a student trying to make the most out of my computer. I create brilliant digital experiences in a treacherous world."
}

export { Layout }
