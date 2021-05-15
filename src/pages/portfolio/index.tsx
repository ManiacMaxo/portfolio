import { Container, Heading, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { ArticleCard, Hero } from '../../components'
import { IArticle } from '../../lib'

const Portfolio: React.FC = () => {
    const articles: IArticle[] = [
        {
            title: 'Bagun',
            img: 'https://storage.gorchilov.net/images/bagun/logo.png',
            href: '/portfolio/bagun',
            tags: ['ReactJS', 'NextJS', 'Esports'],
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim deserunt ut, reprehenderit esse possimus vel, aliquid quos ex, vitae quis eos debitis unde molestias nulla consequatur officiis. Vel, voluptatum pariatur.`
        },
        {
            title: 'CyclePath',
            img: 'https://raw.githubusercontent.com/ManiacMaxo/CyclePath/main/client/public/images/eco_bike.webp',
            href: '/portfolio/cyclepath',
            tags: ['ReactJS', 'NestJS', 'Neo4j', 'Hackathon'],
            description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure porro ipsum fuga veniam quos, quisquam cupiditate vitae aliquid ullam odit ducimus numquam architecto non ratione, consequuntur voluptate neque, tempore nisi!`
        },
        {
            title: 'File Browser',
            img: 'https://repo.gorchilov.net/api/images/cloud-storage.svg',
            href: '/portfolio/cloud-storage',
            tags: ['ReactJS', 'NextJS', 'Cloud'],
            description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure porro ipsum fuga veniam quos, quisquam cupiditate vitae aliquid ullam odit ducimus numquam architecto non ratione, consequuntur voluptate neque, tempore nisi!`
        }
    ]

    return (
        <Stack marginBottom='2rem'>
            <Hero askew float='right' bg={'light.secondary.normal'}>
                <Heading>Portfolio</Heading>
            </Hero>
            <Container as='section'>
                <Wrap spacing='30px' marginTop='5'>
                    {articles.map((article) => (
                        <WrapItem
                            key={article.href}
                            width={{
                                base: '100%',
                                sm: '45%',
                                md: '45%',
                                lg: '30%'
                            }}
                        >
                            <ArticleCard {...article}>
                                {article.description}
                            </ArticleCard>
                        </WrapItem>
                    ))}
                </Wrap>
            </Container>
        </Stack>
    )
}

export default Portfolio
