import Link from 'next/link'
import React from 'react'
import { Layout, ScrollProgress, SideScroll } from '../components'

const Index: React.FC = () => {
    return (
        <Layout>
            <SideScroll>
                <div className='project'>
                    <Link href='#'>
                        <a className='title'>
                            Covid
                            <br />
                            Tracker
                        </a>
                    </Link>
                </div>
                <div className='project'>
                    <Link href='#'>
                        <a className='title'>Thesis</a>
                    </Link>
                </div>
                <div className='project'>
                    <Link href='#'>
                        <a className='title'>CyclePath</a>
                    </Link>
                </div>
            </SideScroll>
            <ScrollProgress end={2} />
        </Layout>
    )
}

export default Index
