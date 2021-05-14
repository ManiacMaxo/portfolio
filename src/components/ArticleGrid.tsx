import { Grid, Text } from '@chakra-ui/layout'
import { GridItem, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { Article } from '../lib'

interface Props {
    articles: Article[]
}

const ArticleGrid: React.FC<Props> = (props) => {
    return (
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={10}>
            {props.articles.map((article) => {
                return (
                    <GridItem as='article' key={article.url + article.title}>
                        <Link href={article.url}>
                            <a>
                                <Image src={article.img} />
                                <Heading>{article.title}</Heading>
                                <Text>{article.description}</Text>
                            </a>
                        </Link>
                    </GridItem>
                )
            })}
        </Grid>
    )
}

export { ArticleGrid }
