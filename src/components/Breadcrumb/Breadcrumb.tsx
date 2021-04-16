import { Icon } from '@chakra-ui/react'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Route } from '../../lib'
import styles from './Breadcrumb.module.scss'

interface Props {
    items: Route[]
    separator?: any
}

const Breadcrumb: React.FC<Props> = (props) => {
    const separator = props.separator ?? BiChevronRight

    return (
        <nav aria-label='breadcrumb'>
            {props.items.map((item, idx) => {
                const isCurrent = idx === props.items.length - 1
                return (
                    <div className={styles.segment} key={item.name}>
                        {isCurrent ? (
                            <span aria-current='page'>{item.name}</span>
                        ) : (
                            <Link to={item.href}>{item.name}</Link>
                        )}

                        {isCurrent ? null : <Icon key={idx} as={separator} />}
                    </div>
                )
            })}
        </nav>
    )
}

export { Breadcrumb }
