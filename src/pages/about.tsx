import React, { useEffect } from 'react'
import { Layout } from '../components'

const about: React.FC = () => {
    useEffect(() => {
        const body = document.querySelector('body')
        body.classList.replace('dark', 'light')

        return () => body.classList.replace('light', 'dark')
    }, [])

    return (
        <Layout>
            <main style={{ backgroundColor: '#e6dfd3' }}>
                <div className='hero'>
                    <div className='container'>
                        <div className='hero-content'>
                            <h1 className='hero-title'>About Me</h1>
                            <h3 className='hero-subtitle'>V - G</h3>
                            <p className='hero-footer'>
                                <span>Web Development</span> (interface design
                                and human interaction),{' '}
                                <span>Deep Learning</span> (mimic the human
                                brain) and <span>Tinkering</span>
                            </p>
                        </div>
                        {/* <div className='hero-image'>
                            <img
                                src='https://repo.gorchilov.net/api/images/maniac.webp'
                                alt=''
                            />
                        </div> */}
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default about
