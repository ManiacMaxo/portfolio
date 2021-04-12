import { Flex, Link, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { useLocation } from 'react-router'

interface Props {
    name: string
    href: string
}

const NavLink: React.FC<Props> = (props) => {
    const color = useColorModeValue('black', 'white')
    const { pathname } = useLocation()
    return (
        <Link
            as={ReactLink}
            to={props.href}
            lineHeight='1em'
            textTransform='uppercase'
            fontWeight={pathname === props.href ? 'bold' : 'normal'}
            _hover={{
                textDecor: 'none',
                p: {
                    transform: 'translateY(-1em)'
                }
            }}
        >
            <Flex
                overflow='hidden'
                color={color}
                textShadow={`0 1em 0 ${color}`}
            >
                {props.name
                    .trim()
                    .split('')
                    .map((letter, idx) => (
                        <Text
                            key={letter + idx}
                            transition='transform 0.44s ease'
                            style={{
                                transitionDelay: `${idx / 20}s`
                            }}
                        >
                            {letter}
                        </Text>
                    ))}
            </Flex>
        </Link>
    )
}

export { NavLink }
