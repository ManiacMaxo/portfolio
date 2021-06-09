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
        opacity: '1'
    })

    const onAnimationEnd = async () => {
        await sleep(2500)
        setTransition(true)
        await sleep(1500)

        setOptions({
            backgroundColor: 'primary',
            opacity: '0'
        })

        await sleep(2000)
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
                    fontSize='1.5em'
                    backgroundColor='primary'
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
                        <Grid
                            w='100vw'
                            h='100vh'
                            {...options}
                            transition='opacity 1.5s'
                            position='absolute'
                            top='0'
                            left='0'
                            zIndex='overlay'
                            justifyContent='center'
                            gap='1.25rem'
                            fontSize={{ base: '2xl', md: '6xl', sm: '4xl' }}
                            sx={{
                                '> .chakra-fade': {
                                    textTransform: 'uppercase',
                                    gridRow: 1,
                                    gridColumn: 1,
                                    alignSelf: 'end',
                                    width: 'max-content',
                                    margin: '0 auto'
                                },
                                '> .chakra-slide-fade': {
                                    alignSelf: 'start'
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
                            <SlideFade in={transition}>
                                <Text fontSize='0.75em' color='textInverted'>
                                    Web developer and Machine Learning
                                    enthusiast
                                </Text>
                            </SlideFade>
                        </Grid>
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
