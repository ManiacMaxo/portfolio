import {
    Box,
    Flex,
    Heading,
    HStack,
    Image,
    Tag,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

interface IBlogTags {
    tags: string[]
}

const BlogTags: React.FC<IBlogTags> = (props) => {
    const bg = useColorModeValue('light.highlight', 'dark.primary')
    const color = useColorModeValue('light.text', 'dark.text')

    return (
        <HStack spacing={2}>
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
    heading: string
    href: string
    img: string
    tags?: string[]
}

const Article: React.FC<Props> = (props) => {
    const imgBg = useColorModeValue(
        'radial(light.secondary.dark 1px, transparent 1px)',
        'radial(dark.secondary.light 1px, transparent 1px)'
    )

    return (
        <Box
            marginTop={{ base: '1', sm: '5' }}
            display='flex'
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent='space-between'
            w='100%'
        >
            <Box
                display='flex'
                flex='1'
                marginRight='3'
                position='relative'
                alignItems='center'
            >
                <Box
                    zIndex='2'
                    marginLeft={{ base: '0', sm: '5%' }}
                    marginTop='5%'
                >
                    <Link to={props.href}>
                        <Image
                            borderRadius='lg'
                            src={props.img}
                            alt={props.heading}
                            objectFit='contain'
                        />
                    </Link>
                </Box>
                <Box zIndex='1' width='100%' position='absolute' height='100%'>
                    <Box
                        bgGradient={imgBg}
                        backgroundSize='20px 20px'
                        opacity='0.4'
                        height='100%'
                    />
                </Box>
            </Box>
            <Flex
                flex='1'
                direction='column'
                justifyContent='center'
                marginTop={{ base: '3', sm: '0' }}
            >
                {props.tags && <BlogTags tags={props.tags} />}
                <Heading marginTop='1'>
                    <Link to={props.href}>{props.heading}</Link>
                </Heading>
                <Text as='p' marginTop='2' fontSize='lg'>
                    {props.children}
                </Text>
            </Flex>
        </Box>
    )
}

export { Article }
