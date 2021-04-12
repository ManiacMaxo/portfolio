import {
    Heading,
    Icon,
    IconButton,
    Link as ChakraLink,
    Link,
    Modal,
    ModalContent,
    ModalOverlay,
    Stack,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react'
import React from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { GiDiamonds } from 'react-icons/gi'
import { routes } from '../constants'

interface Props {}

const HeaderMenu: React.FC<Props> = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const color = useColorModeValue('light.dark', 'dark.hover')
    const bg = useColorModeValue(
        'light.secondary.light',
        'dark.secondary.normal'
    )

    return (
        <>
            <IconButton
                icon={<BiMenuAltRight />}
                variant='circle'
                aria-label='menu'
                isRound
                onClick={() => (isOpen ? onClose() : onOpen())}
            />
            <Modal
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
            </Modal>
        </>
    )
}

export { HeaderMenu }
