import { Container, Heading, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { ArticleCard, Hero } from '../../components'
import { getClient, IArticle, indexQuery, urlForImage } from '../../lib'

interface Props {
    articles: any[]
}

const Portfolio: React.FC<Props> = (props) => {
    return (
        <Stack marginBottom='2rem'>
            <Hero askew float='right' bg={'light.secondary.normal'}>
                <Heading>Portfolio</Heading>
            </Hero>
            <section>
                <Container>
                    <Wrap spacing='30px' marginTop='5'>
                        {props.articles.map((article) => (
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
            </section>
        </Stack>
    )
}

export const getStaticProps = async ({ preview = false }): Promise<any> => {
    const res = await getClient(preview).fetch(indexQuery)

    const articles: IArticle[] = res.map((project: any) => ({
        id: project.id,
        title: project.title,
        img: urlForImage(project.mainImage).url(),
        href: `/porfolio/${project.slug}`,
        tags: project.tags,
        description: 'project.body'
    }))

    return {
        props: {
            articles
        },
        revalidate: 60
    }
}

export default Portfolio
