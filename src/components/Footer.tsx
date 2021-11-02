import React from 'react'
import { socials } from '../lib/constants'

const Footer: React.FC = () => {
    return (
        <div className='py-12'>
            <div className='container grid grid-cols-3'>
                <div></div>
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
            </div>
        </div>
    )
}

export { Footer }
