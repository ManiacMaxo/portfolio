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
            <div className={styles.wrapper}>
                <div className={styles.open}>
                    <span />
                    <span />
                    <span />
                </div>
                <span className={styles.close} />
            </div>
        </Button>
    )
}

export { HeaderBurger }
