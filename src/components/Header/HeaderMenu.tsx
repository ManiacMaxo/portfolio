import {
    Center,
    Heading,
    Icon,
    Link as ChakraLink,
    Slide,
    Stack,
    useDisclosure
} from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { GiDiamonds } from 'react-icons/gi'
import { useEscape } from '../../hooks'
import { routes } from '../../lib/constants'
import { Burger } from './Burger'

const HeaderMenu: React.FC = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()

    const router = useRouter()
    useEffect(onClose, [router])
    useEscape(onClose)

    return (
        <>
            <Burger isOpen={isOpen} onClick={isOpen ? onClose : onOpen} />
            <Slide direction='right' in={isOpen}>
                <Center w='100vw' h='100vh' bg='secondary.light'>
                    <Stack
                        width='fit-content'
                        alignItems='center'
                        spacing='0.5rem'
                    >
                        <Heading
                            textTransform='uppercase'
                            color='dark'
                            fontSize='1rem'
                            marginBottom='1rem'
                            display='flex'
                            alignItems='center'
                        >
                            <Icon as={GiDiamonds} fontSize='0.7em' />
                            Navigation
                        </Heading>
                        {routes.map(({ name, href }) => (
                            <Link href={href} key={name + href}>
                                <ChakraLink
                                    key={name}
                                    _hover={{
                                        color: 'dark',
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
