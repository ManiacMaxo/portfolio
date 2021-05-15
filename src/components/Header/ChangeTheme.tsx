import { IconButton } from '@chakra-ui/button'
import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

interface Props {}

const ChangeTheme: React.FC<Props> = (props) => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Button
            variant='circle'
            aria-label='toggle theme'
            marginRight='0.4rem'
            onClick={toggleColorMode}
        >
            {colorMode === 'light' ? <FiMoon /> : <FiSun />}
        </Button>
    )
}

export { ChangeTheme }
