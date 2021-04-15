import { Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router'
import { Link as ReactLink } from 'react-router-dom'

interface Props {
    name: string
    href: string
    isAnimated?: boolean
}

const NavLink: React.FC<Props> = (props) => {
    const { pathname } = useLocation()
    const isCurrent = pathname === props.href

    const hoverEffect = props.isAnimated
        ? {
              p: {
                  transform: 'translateY(-1em)'
              }
          }
        : { fontWeight: 'bold' }

    return (
        <Link
            as={ReactLink}
            to={props.href}
            lineHeight='1em'
            textTransform='uppercase'
            fontWeight={isCurrent ? 'bold' : 'normal'}
            _hover={hoverEffect}
        >
            {props.isAnimated ? (
                <Flex
                    overflow='hidden'
                    color='inherit'
                    textShadow='0 1em 0 currentColor'
                >
                    {props.name
                        .trim()
                        .split('')
                        .map((letter: string, idx: number) => (
                            <Text
                                key={letter + idx}
                                transition={`all 0.4s ease ${idx / 20}s`}
                            >
                                {letter}
                            </Text>
                        ))}
                </Flex>
            ) : (
                props.name
            )}
        </Link>
    )
}

export { NavLink }
