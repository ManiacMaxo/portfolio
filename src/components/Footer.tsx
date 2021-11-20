import React from 'react'
import { HiChevronUp } from 'react-icons/hi'
import { socials } from '../lib/constants'

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className='py-12'>
            <div className='container grid grid-cols-3'>
                <div className='flex items-end justify-start'>
                    &#169; {new Date().getFullYear()}
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <h3 className='font-heading font-bold text-[5vw] md:text-[3vw] uppercase'>
                        Socials
                    </h3>
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            rel='noreferrer noopener'
                            target='_blank'
                            className='underlined'
                        >
                            {social.name}
                        </a>
                    ))}
                </div>
                <div className='flex items-end justify-end'>
                    <button
                        className='p-2 text-4xl shadow-xl outline-none rounded-xl hover:shadow-inner focus:ring-1 ring-secondary dark:ring-primary'
                        onClick={scrollToTop}
                        title='scroll to top'
                        aria-label='scroll to top'
                    >
                        <HiChevronUp />
                    </button>
                </div>
            </div>
        </div>
    )
}

export { Footer }
