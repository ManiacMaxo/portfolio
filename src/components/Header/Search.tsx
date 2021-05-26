import {
    Button,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Modal,
    ModalContent,
    ModalOverlay,
    Spinner,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import styles from './Header.module.scss'

interface Props {
    minCharacters?: number
}

const Search: React.FC<Props> = (props) => {
    const minCharacters = props.minCharacters ?? 2

    const bg = useColorModeValue('light.bg', 'dark.bg')
    const color = useColorModeValue('light.text', 'dark.text')

    const { isOpen, onClose, onOpen } = useDisclosure()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()
        const newQuery = e.target.value

        // console.log(newQuery)

        // open search dropdown on search query
        if (newQuery.length < minCharacters) {
            setOpen(false)
        } else if (!open) {
            setOpen(true)
            setIsLoading(true)
        }

        // this.setValue(newQuery)
    }

    return (
        <>
            <Button
                variant='circle'
                aria-label='search'
                marginRight='0.4rem'
                onClick={isOpen ? onClose : onOpen}
            >
                <BiSearch />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                    className={styles.container}
                    bg={bg}
                    color={color}
                    borderRadius='5px'
                    marginTop='10rem'
                    maxW='500px'
                    width='min(100%, 80vw)'
                >
                    <InputGroup className={styles.search}>
                        <InputLeftElement>
                            <Icon as={BiSearch} />
                        </InputLeftElement>
                        <Input
                            aria-autocomplete='list'
                            autoComplete='off'
                            autoCorrect='off'
                            spellCheck={false}
                            maxLength={64}
                            placeholder='Search the projects'
                            onChange={handleSearchChange}
                        />
                        {isLoading ? (
                            <InputRightElement>
                                <Spinner size='sm' />
                            </InputRightElement>
                        ) : null}
                    </InputGroup>
                    {/* <ModalBody as='ul' role='listbox'></ModalBody> */}
                </ModalContent>
            </Modal>
        </>
    )
}

export { Search }
