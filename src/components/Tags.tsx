import { HStack, SpaceProps, Tag, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

interface Props {
    tags: string[]
    marginTop?: SpaceProps['marginTop']
}

const Tags: React.FC<Props> = (props) => {
    if (!props.tags) return
    const bg = useColorModeValue('light.highlight', 'dark.primary')
    const color = useColorModeValue('light.text', 'dark.text')

    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag
                        size='md'
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

export { Tags }
