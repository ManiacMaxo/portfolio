import { Button } from '@chakra-ui/react'
import React from 'react'
import styles from './HeaderBurger.module.scss'

interface Props {
    isOpen: boolean
    onClick: () => void
}

const HeaderBurger: React.FC<Props> = ({ isOpen, onClick }) => {
    const toggleModal = () => {
        onClick()
    }

    return (
        <Button
            variant='circle'
            aria-label='menu burger button'
            onClick={toggleModal}
            className={[styles.button, isOpen ? styles.active : ''].join(' ')}
            zIndex='2'
        >
            <span className={styles.open} />
            <span className={styles.close} />
        </Button>
    )
}

export { HeaderBurger }
