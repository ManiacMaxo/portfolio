import {
    Icon,
    IconButton,
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
import styles from './Search.module.scss'

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

        console.log(newQuery)

        // open search dropdown on search query
        if (newQuery.length < minCharacters) {
            setOpen(false)
        } else if (!open) {
            setOpen(true)
        }

        // this.setValue(newQuery)
    }

    return (
        <>
            <IconButton
                icon={<BiSearch />}
                variant='circle'
                aria-label='search'
                isRound
                marginRight='0.4rem'
                onClick={isOpen ? onClose : onOpen}
            />

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
                        <InputLeftElement children={<Icon as={BiSearch} />} />
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
                            <InputRightElement
                                children={<Spinner size='sm' />}
                            />
                        ) : null}
                    </InputGroup>
                    {/* <ModalBody as='ul' role='listbox'></ModalBody> */}
                </ModalContent>
            </Modal>
        </>
    )
}

export { Search }
