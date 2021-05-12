import {
    Center,
    Heading,
    Icon,
    Link as ChakraLink,
    Slide,
    Stack,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react'
import React from 'react'
import { GiDiamonds } from 'react-icons/gi'
import Link from 'next/link'
import { Burger } from './Burger'
import { routes } from '../../lib/constants'

const HeaderMenu: React.FC = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()

    const color = useColorModeValue('light.dark', 'dark.hover')
    const bg = useColorModeValue(
        'light.secondary.light',
        'dark.secondary.normal'
    )

    return (
        <>
            <Burger isOpen={isOpen} onClick={isOpen ? onClose : onOpen} />
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
                            <Link href={href}>
                                <ChakraLink
                                    key={name}
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
                            </Link>
                        ))}
                    </Stack>
                </Center>
            </Slide>
        </>
    )
}

export { HeaderMenu }
