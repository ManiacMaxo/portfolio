import Memoji from '@/assets/memoji.png'
import Image from 'next/image'

export const Hero = () => {
  return (
    <>
      <div className='sticky top-12 row-span-8 mx-auto'>
        <Image src={Memoji} alt='Me!' sizes='' height={400} />
      </div>

      <div className='flex h-screen items-center justify-center'>
        <h1 className='font-display text-5xl sm:text-6xl lg:text-8xl'>
          Building Digital Experiences
        </h1>
      </div>
    </>
  )
}
