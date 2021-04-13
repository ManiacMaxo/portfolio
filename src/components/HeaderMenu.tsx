import {
    Center,
    Heading,
    Icon,
    Link as ChakraLink,
    Link,
    Slide,
    Stack,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react'
import React from 'react'
import { GiDiamonds } from 'react-icons/gi'
import { HeaderBurger } from '.'
import { routes } from '../constants'

interface Props {}

const HeaderMenu: React.FC<Props> = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()

    const color = useColorModeValue('light.dark', 'dark.hover')
    const bg = useColorModeValue(
        'light.secondary.light',
        'dark.secondary.normal'
    )

    return (
        <>
            <HeaderBurger isOpen={isOpen} onClick={isOpen ? onClose : onOpen} />
            <Slide direction='right' in={isOpen}>
                <Center w='100vw' h='100vh' bg={bg}>
                    <Stack
                        width='fit-content'
                        alignItems='center'
                        spacing='0.5rem'
                    >
                        <Heading
                            textTransform='uppercase'
                            color={color}
                            fontSize='1rem'
                            marginBottom='1rem'
                            display='flex'
                            alignItems='center'
                        >
                            <Icon as={GiDiamonds} fontSize='0.7em' />
                            Navigation
                        </Heading>
                        {routes.map(({ name, href }) => (
                            <ChakraLink
                                key={name}
                                as={Link}
                                to={href}
                                _hover={{
                                    color,
                                    textDecor: 'none'
                                }}
                                color='white'
                                fontSize='2rem'
                                fontFamily='secondary'
                            >
                                {name}
                            </ChakraLink>
                        ))}
                    </Stack>
                </Center>
            </Slide>
            {/* <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                motionPreset='slideInRight'
                returnFocusOnClose={false}
            >
                <ModalOverlay bg={bg} />
                <ModalContent
                    bg='transparent'
                    boxShadow='none'
                    width='fit-content'
                >
                    <Stack
                        width='fit-content'
                        alignItems='center'
                        spacing='0.5rem'
                    >
                        <Heading
                            textTransform='uppercase'
                            color={color}
                            fontSize='1rem'
                            marginBottom='1rem'
                            display='flex'
                            alignItems='center'
                        >
                            <Icon as={GiDiamonds} fontSize='0.7em' />
                            Navigation
                        </Heading>
                        {routes.map(({ name, href }) => (
                            <ChakraLink
                                key={name}
                                as={Link}
                                to={href}
                                _hover={{
                                    color,
                                    textDecor: 'none'
                                }}
                                color='white'
                                fontSize='2rem'
                                fontFamily='secondary'
                            >
                                {name}
                            </ChakraLink>
                        ))}
                    </Stack>
                </ModalContent>
            </Modal> */}
        </>
    )
}

export { HeaderMenu }
