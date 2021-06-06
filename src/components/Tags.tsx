import { HStack, SpaceProps, Tag } from '@chakra-ui/react'
import React from 'react'

interface Props {
    tags: string[]
    marginTop?: SpaceProps['marginTop']
}

const Tags: React.FC<Props> = (props) => {
    if (!props.tags) return

    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag
                        size='md'
                        variant='solid'
                        color='text'
                        bg='highlight'
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
