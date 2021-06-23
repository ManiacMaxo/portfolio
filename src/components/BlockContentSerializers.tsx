import React from 'react'
import Link from 'next/link'

interface Props {
    mark: any
}

export const ExternalLink: React.FC<Props> = ({ children, mark }) => {
    return (
        <a
            className='article-link'
            href={mark.href}
            {...(mark.blank
                ? {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                  }
                : null)}
        >
            {children}
        </a>
    )
}

export const InternalLink: React.FC<Props> = ({ children, mark }) => {
    return (
        <Link href={`/${mark.slug}`}>
            <a className='article-link'>{children}</a>
        </Link>
    )
}
