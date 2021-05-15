import {
    Box,
    Heading,
    HStack,
    Image,
    Link as ChakraLink,
    SpaceProps,
    Tag,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

interface IBlogTags {
    tags: string[]
    marginTop?: SpaceProps['marginTop']
}

const BlogTags: React.FC<IBlogTags> = (props) => {
    if (!props.tags) return
    const bg = useColorModeValue('light.highlight', 'dark.primary')
    const color = useColorModeValue('light.text', 'dark.text')

    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag
                        size={'md'}
                        variant='solid'
                        color={color}
                        bg={bg}
                        key={tag}
                    >
                        {tag}
                    </Tag>
                )
            })}
        </HStack>
    )
}

interface Props {
    title: string
    href: string
    img: string
    tags?: string[]
}

const ArticleCard: React.FC<Props> = (props) => {
    return (
        <Box w='100%' as='article'>
            <Box borderRadius='lg' overflow='hidden'>
                <Link href={props.href}>
                    <ChakraLink
                        textDecoration='none'
                        _hover={{ textDecoration: 'none' }}
                    >
                        <Image
                            transform='scale(1.0)'
                            src={props.img}
                            alt={props.title}
                            objectFit='contain'
                            width='100%'
                            transition='0.3s ease-in-out'
                            _hover={{
                                transform: 'scale(1.05)'
                            }}
                        />
                    </ChakraLink>
                </Link>
            </Box>
            {props.tags && <BlogTags tags={props.tags} marginTop='3' />}
            <Heading fontSize='xl' marginTop='2'>
                <Link href={props.href}>
                    <ChakraLink
                        textDecoration='none'
                        _hover={{ textDecoration: 'none' }}
                    >
                        {props.title}
                    </ChakraLink>
                </Link>
            </Heading>
            <Text as='p' fontSize='md' marginTop='2'>
                {props.children}
            </Text>
        </Box>
    )
}

export { ArticleCard }
