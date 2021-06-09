import {
    Fade,
    Grid,
    Heading,
    Portal,
    SlideFade,
    Stack,
    Text
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Hero, Typewriter } from '../components'
import { sleep } from '../lib'

const Home: React.FC = () => {
    const [visible, setVisible] = useState(true)
    const [transition, setTransition] = useState(false)

    const [options, setOptions] = useState({
        backgroundColor: 'primary',
        fontSize: '7xl',
        transform: 'translate(0)'
    })

    const onAnimationEnd = async () => {
        setTransition(true)
        await sleep(4005)

        setOptions({
            backgroundColor: 'transparent',
            fontSize: '6xl',
            transform: 'translate(0)'
        })

        await sleep(4005)
        setVisible(false)
    }

    return (
        <Stack>
            <Hero
                askew
                textTransform='uppercase'
                fontSize='3xl'
                lineHeight='0.8'
            >
                <Heading
                    as='h1'
                    color='textInverted'
                    position='relative'
                    marginBottom='1rem'
                    {...options}
                    _after={{
                        content: `''`,
                        position: 'absolute',
                        left: '0',
                        bottom: '-0.6rem',
                        width: '1.9em',
                        height: '0.5rem',
                        bg: 'currentColor'
                    }}
                >
                    Hey! I&apos;m Victor
                </Heading>
                {visible && (
                    <Portal>
                        <Stack
                            w='100vw'
                            h='100vh'
                            background={options.backgroundColor}
                            transition='background-color 4s'
                            position='absolute'
                            top='0'
                            left='0'
                            zIndex='overlay'
                            direction='column'
                            justifyContent='center'
                            alignItems='center'
                            spacing='2rem'
                        >
                            <Grid
                                textAlign='center'
                                sx={{
                                    '> *': {
                                        fontSize: options.fontSize,
                                        textTransform: 'uppercase',
                                        transition: 'all 3s',
                                        gridRow: 1,
                                        gridColumn: 1
                                    }
                                }}
                            >
                                <Fade in={!transition}>
                                    <Typewriter
                                        as='h1'
                                        backgroundColor='primary'
                                        color='textInverted'
                                        onAnimationEnd={onAnimationEnd}
                                    >
                                        Hey! I&apos;m Victor
                                    </Typewriter>
                                </Fade>
                                <Fade in={transition}>
                                    <Text
                                        as='h1'
                                        fontFamily='heading'
                                        color='textInverted'
                                    >
                                        Hey! I&apos;m Victor
                                    </Text>
                                </Fade>
                            </Grid>
                            <SlideFade in={transition}>
                                <Text fontSize='2xl' color='textInverted'>
                                    Web developer and Machine Learning
                                    enthusiast
                                </Text>
                            </SlideFade>
                        </Stack>
                    </Portal>
                )}
                <Text
                    fontFamily='secondary'
                    textTransform='initial'
                    w='500px'
                    maxW='100%'
                    lineHeight='1em'
                >
                    Web developer and Machine Learning enthusiast
                </Text>
            </Hero>
        </Stack>
    )
}

export default Home
