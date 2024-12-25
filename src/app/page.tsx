import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'

export default function Home() {
  return (
    <main className='grid grid-cols-2 gap-6'>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </main>
  )
}
