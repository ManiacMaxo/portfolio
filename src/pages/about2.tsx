import React, { useEffect } from 'react'
import { Layout } from '../components'
import { gsap } from 'gsap'

const about: React.FC = () => {
    useEffect(() => {
        const body = document.querySelector('body')
        body.classList.replace('dark', 'light')

        gsap.utils.toArray('#hidden').forEach((block: gsap.DOMTarget) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: block,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                }
            })
            tl.fromTo(
                block,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1.5
                }
            )
        })

        return () => body.classList.replace('light', 'dark')
    }, [])

    return (
        <Layout title='About | Victor Gorchilov'>
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
            <section className='about container'>
                <p className='about-main justify' id='hidden'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eligendi nesciunt nisi atque sit magnam commodi ad ipsam
                    ipsa praesentium ullam ratione, voluptate blanditiis error
                    quasi, exercitationem, fuga illum earum vitae at culpa
                    aliquid veritatis accusantium vero. Voluptatem laboriosam
                    enim atque ex esse dolore et? Ea consequatur voluptatibus
                    deserunt libero accusamus.
                </p>
                <p className='about-sub' id='hidden'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam porro optio dolorum modi enim ratione.
                </p>
            </section>
            {[0, 1, 2, 3, 4, 5, 6].map((idx) => (
                <section className='container' key={idx}>
                    <p id='hidden' className='justify'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Repudiandae nisi dolorem, porro explicabo unde
                        fugit nesciunt ipsum iste, amet inventore maxime ea
                        quidem fuga possimus, dolor officia? Impedit aliquid
                        ullam et ducimus facilis nihil dolorum suscipit
                        incidunt, excepturi corporis sint ab in voluptas nobis?
                        Debitis voluptatem eum culpa eius maiores totam ad
                        temporibus autem, dicta nesciunt eos ducimus architecto
                        corrupti deserunt unde placeat ut. Voluptatum magnam
                        doloribus illum eius nesciunt dicta atque quo nam
                        deleniti dolor a veritatis ipsum pariatur optio facere
                        nostrum provident doloremque porro assumenda, quidem
                        distinctio. Libero eum molestiae reiciendis non
                        quibusdam aut, animi blanditiis a incidunt!
                    </p>
                </section>
            ))}
        </Layout>
    )
}

export default about
