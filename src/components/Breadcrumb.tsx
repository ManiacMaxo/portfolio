import { Box, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Route } from '../lib'

interface Props {
    items: Route[]
    separator?: any
}

const Breadcrumb: React.FC<Props> = (props) => {
    return (
        <nav aria-label='breadcrumb'>
            {props.items.map((item, idx) => {
                const isCurrent = idx === props.items.length - 1
                return (
                    <Box
                        display='inline-block'
                        userSelect='none'
                        key={item.name}
                    >
                        {isCurrent ? (
                            <Text
                                aria-current='page'
                                cursor='pointer'
                                fontWeight='bold'
                            >
                                {item.name}
                            </Text>
                        ) : (
                            <>
                                <Link href={item.href}>
                                    <a>{item.name}</a>
                                </Link>
                                <Icon
                                    key={idx}
                                    as={props.separator}
                                    marginInline='0.5rem'
                                />
                            </>
                        )}
                    </Box>
                )
            })}
        </nav>
    )
}

Breadcrumb.defaultProps = {
    separator: BiChevronRight
}

export { Breadcrumb }
