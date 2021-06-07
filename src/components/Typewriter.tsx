import { Heading } from '@chakra-ui/layout'
import { HeadingProps, keyframes } from '@chakra-ui/react'
import React from 'react'

interface Props {
    speed?: number
}

const typewriter = keyframes`
    to {
        left: 100%;
    }
`
const blink = keyframes`
    to {
        background: transparent;
    }
`

const defaultStyle = {
    content: `''`,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
}

const Typewriter: React.FC<HeadingProps & Props> = (props) => {
    const animationTimingFunction = `steps(${props.children.toString().length})`

    const typewriterAnim = `${typewriter} ${props.speed}s ${animationTimingFunction} forwards`
    const blinkAnim = `${blink} 750ms ${animationTimingFunction} infinite`

    return (
        <Heading
            fontFamily='monospace'
            position='relative'
            width='max-content'
            _before={{
                ...defaultStyle,
                animation: typewriterAnim,
                backgroundColor: props.backgroundColor
            }}
            _after={{
                ...defaultStyle,
                backgroundColor: props.color,
                width: '0.125em',
                animation: `${typewriterAnim}, ${blinkAnim}`
            }}
            {...props}
        >
            {props.children}
        </Heading>
    )
}

Typewriter.defaultProps = {
    speed: 4
}

export { Typewriter }
