import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const ChangeTheme: React.FC = () => {
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
