import { Footer } from '@/components/footer'
import { Hind, Teko } from 'next/font/google'
import './globals.css'

const display = Teko({
  weight: '600',
  preload: true,
  variable: '--font-display'
})

const body = Hind({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-body'
})

export const metadata = {
  title: 'Victor Gorchilov - Software Engineer from Bulgaria'
}

export default function Layout(props: React.PropsWithChildren) {
  return (
    <html
      lang='en'
      className={`${display.variable} ${body.variable} antialiased`}
    >
      <body>
        {props.children}
        <Footer />
      </body>
    </html>
  )
}
