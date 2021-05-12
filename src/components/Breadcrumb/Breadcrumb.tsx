import { Icon } from '@chakra-ui/react'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import Link from 'next/link'
import { Route } from '../../lib'
import styles from './Breadcrumb.module.scss'

interface Props {
    items: Route[]
    separator?: any
}

const Breadcrumb: React.FC<Props> = (props) => {
    return (
        <nav aria-label='breadcrumb'>
            {props.items.map((item, idx) => {
                const isCurrent = idx === props.items.length - 1
                return (
                    <div className={styles.segment} key={item.name}>
                        {isCurrent ? (
                            <span aria-current='page'>{item.name}</span>
                        ) : (
                            <Link href={item.href}>
                                <a>{item.name}</a>
                            </Link>
                        )}

                        {isCurrent ? null : (
                            <Icon key={idx} as={props.separator} />
                        )}
                    </div>
                )
            })}
        </nav>
    )
}

Breadcrumb.defaultProps = {
    separator: BiChevronRight
}

export { Breadcrumb }
