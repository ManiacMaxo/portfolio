import { Link as ChakraLink, usePrefersReducedMotion } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface Props {
    name: string
    href: string
    isAnimated?: boolean
}

interface LetterProps {
    n: number
}

const Letter = styled.p<LetterProps>`
    transition-delay: ${(props: any) => props.n / 25}s !important;
`

const NavLink: React.FC<Props> = (props) => {
    const prefersReducedMotion = usePrefersReducedMotion()
    const animated = !prefersReducedMotion && props.isAnimated

    const name = props.name.trim()

    const [active, setActive] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (!router.isReady) return
        if (router.asPath !== props.href) return setActive(false)
        setActive(true)
    }, [router])

    return (
        <Link href={props.href}>
            <ChakraLink
                lineHeight='1'
                textTransform='uppercase'
                fontWeight={active && 'bold'}
                _hover={{
                    textDecoration: 'none',
                    p: animated
                        ? {
                              transform: 'translateY(-1em)'
                          }
                        : {
                              fontWeight: 'bold'
                          }
                }}
                sx={{
                    span: {
                        display: 'flex',
                        color: 'inherit',
                        overflow: 'hidden',
                        textShadow: '0 1em 0 currentColor',
                        p: {
                            transition: 'transform 0.25s ease'
                        }
                    }
                }}
            >
                {animated ? (
                    <span>
                        {name.split('').map((letter: string, idx: number) => (
                            <Letter key={letter + idx} n={idx}>
                                {letter}
                            </Letter>
                        ))}
                    </span>
                ) : (
                    name
                )}
            </ChakraLink>
        </Link>
    )
}

export { NavLink }
