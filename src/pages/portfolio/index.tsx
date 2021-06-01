/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Container, Heading, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import { GetStaticPropsContext } from 'next'
import React from 'react'
import { ArticleCard, Hero } from '../../components'
import { getClient, IArticle, indexQuery, urlForImage } from '../../lib'

interface Props {
    articles: IArticle[]
}

const Portfolio: React.FC<Props> = ({ articles }) => {
    return (
        <Stack marginBottom='2rem'>
            <Hero askew float='right' bg={'light.secondary.normal'}>
                <Heading>Portfolio</Heading>
            </Hero>
            <section>
                <Container>
                    <Wrap spacing='30px' marginTop='5'>
                        {articles.map((article) => (
                            <WrapItem
                                key={article.id}
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
            </section>
        </Stack>
    )
}

export const getStaticProps = async ({
    preview = false
}: GetStaticPropsContext): Promise<any> => {
    const res = await getClient(preview).fetch(indexQuery)

    const articles: IArticle[] = res.map((project) => ({
        id: project.id,
        title: project.title,
        img: urlForImage(project.mainImage).url(),
        href: `/portfolio/${project.slug}`,
        tags: project.tags,
        description: project.description
    }))

    return {
        props: {
            articles
        },
        revalidate: 7200
    }
}

export default Portfolio
