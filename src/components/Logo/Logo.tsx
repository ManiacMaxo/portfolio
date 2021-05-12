import React from 'react'
import Link from 'next/link'
import styles from './Logo.module.scss'

interface Props {
    animated?: boolean
}

const Logo: React.FC<Props> = (props) => {
    return (
        <Link href='/'>
            <a className={styles.link}>
                <svg // font is Kalmansk
                    width='150'
                    height='32'
                    viewBox='0 0 43 10'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path d='M4.8 1.816C5.056 1.816 5.2 1.672 5.2 1.416V0.599999C5.2 0.344 5.056 0.2 4.8 0.2H2.8C1.232 0.2 0.4 1.064 0.4 2.616V6.6C0.4 8.152 1.232 8.984 2.8 9H3.6C4.64 9 5.2 8.44 5.2 7.4V4.6C5.2 4.344 5.056 4.2 4.8 4.2H4C3.744 4.2 3.6 4.344 3.6 4.6V7C3.6 7.256 3.456 7.4 3.2 7.4H2.8C2.272 7.4 2 7.112 2 6.6V2.616C2 2.104 2.272 1.816 2.8 1.816H4.8Z' />
                    <path d='M5.99375 7.4C5.99375 8.44 6.55375 9 7.59375 9H8.39375C9.43375 9 9.99375 8.44 9.99375 7.4V4.184C9.99375 3.144 9.43375 2.584 8.39375 2.584H7.59375C6.55375 2.584 5.99375 3.144 5.99375 4.184V7.4ZM7.99375 4.2C8.24975 4.2 8.39375 4.344 8.39375 4.6V7C8.39375 7.256 8.24975 7.4 7.99375 7.4C7.73775 7.4 7.59375 7.256 7.59375 7V4.6C7.59375 4.344 7.73775 4.2 7.99375 4.2Z' />
                    <path d='M11.9906 9C12.2466 9 12.3906 8.856 12.3906 8.6V4.984C12.3906 4.472 12.6626 4.2 13.1906 4.2H14.3906C14.6466 4.2 14.7906 4.056 14.7906 3.8V2.984C14.7906 2.728 14.6466 2.584 14.3906 2.584H13.1906C11.6226 2.584 10.7906 3.432 10.7906 4.984V8.6C10.7906 8.856 10.9346 9 11.1906 9H11.9906Z' />
                    <path d='M17.1875 2.6C16.1475 2.6 15.5875 3.16 15.5875 4.2V7.4C15.5875 8.44 16.1475 9 17.1875 9H17.9875C19.0275 9 19.5875 8.44 19.5875 7.4V7C19.5875 6.744 19.4435 6.6 19.1875 6.6H18.3875C18.1315 6.6 17.9875 6.744 17.9875 7C17.9875 7.256 17.8435 7.4 17.5875 7.4C17.3315 7.4 17.1875 7.256 17.1875 7V4.6C17.1875 4.344 17.3315 4.2 17.5875 4.2C17.8435 4.2 17.9875 4.344 17.9875 4.6C17.9875 4.856 18.1315 5 18.3875 5H19.1875C19.4435 5 19.5875 4.856 19.5875 4.6V4.2C19.5875 3.16 19.1715 2.6 18.3875 2.6H17.1875Z' />
                    <path d='M22.3844 2.568C22.1284 2.568 21.9844 2.424 21.9844 2.168V0.599999C21.9844 0.344 21.8404 0.2 21.5844 0.2H20.7844C20.5284 0.2 20.3844 0.344 20.3844 0.599999V8.6C20.3844 8.856 20.5284 9 20.7844 9H21.5844C21.8404 9 21.9844 8.856 21.9844 8.6V4.6C21.9844 4.344 22.1284 4.2 22.3844 4.2C22.6404 4.2 22.7844 4.344 22.7844 4.6V8.6C22.7844 8.856 22.9284 9 23.1844 9H23.9844C24.2404 9 24.3844 8.856 24.3844 8.6V4.168C24.3844 3.128 23.9684 2.568 23.1844 2.568H22.3844Z' />
                    <path d='M25.1812 1.4C25.1812 1.656 25.3252 1.8 25.5812 1.8H26.3813C26.6373 1.8 26.7812 1.656 26.7812 1.4V0.599999C26.7812 0.344 26.6373 0.2 26.3813 0.2H25.5812C25.3252 0.2 25.1812 0.344 25.1812 0.599999V1.4ZM25.1812 8.6C25.1812 8.856 25.3252 9 25.5812 9H26.3813C26.6373 9 26.7812 8.856 26.7812 8.6V3C26.7812 2.744 26.6373 2.6 26.3813 2.6H25.5812C25.3252 2.6 25.1812 2.744 25.1812 3V8.6Z' />
                    <path d='M27.5875 8.568C27.5875 8.824 27.7315 8.968 27.9875 8.968H28.7875C29.0435 8.968 29.1875 8.824 29.1875 8.568V0.599999C29.1875 0.344 29.0435 0.2 28.7875 0.2H27.9875C27.7315 0.2 27.5875 0.344 27.5875 0.599999V8.568Z' />
                    <path d='M29.9937 7.4C29.9937 8.44 30.5538 9 31.5938 9H32.3937C33.4337 9 33.9937 8.44 33.9937 7.4V4.184C33.9937 3.144 33.4337 2.584 32.3937 2.584H31.5938C30.5538 2.584 29.9937 3.144 29.9937 4.184V7.4ZM31.9937 4.2C32.2497 4.2 32.3937 4.344 32.3937 4.6V7C32.3937 7.256 32.2497 7.4 31.9937 7.4C31.7377 7.4 31.5938 7.256 31.5938 7V4.6C31.5938 4.344 31.7377 4.2 31.9937 4.2Z' />
                    <path d='M38.4226 2.6C38.1826 2.6 38.0706 2.712 37.9906 2.952L37.2386 5.64C37.2226 5.72 37.1746 5.72 37.1426 5.64L36.3906 2.952C36.3266 2.712 36.1986 2.6 35.9586 2.6H35.1586C34.8706 2.6 34.7426 2.776 34.8066 3.048L36.3266 8.664C36.3746 8.888 36.5186 9 36.7586 9H37.6386C37.8786 9 38.0066 8.888 38.0706 8.648L39.5746 3.048C39.6546 2.776 39.5106 2.6 39.2226 2.6H38.4226Z' />
                    <path
                        className={props.animated ? styles.period : undefined}
                        d='M41.5844 9.016C42.2404 9.016 42.7844 8.472 42.7844 7.816C42.7844 7.144 42.2404 6.616 41.5844 6.616C40.9284 6.616 40.3844 7.16 40.3844 7.816C40.3844 8.472 40.9284 9.016 41.5844 9.016Z'
                    />
                </svg>
            </a>
        </Link>
    )
}

export { Logo }
