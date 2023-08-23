import ProviderApp from './provider.js'

import { Providers } from './providers'

import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sharex social media',
  description: 'Share experiences through the app'
}

export const dynamic = 'force-dynamic'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <ProviderApp>
        <body className={inter.className}>
          <Providers>
            <div className='dark text-foreground bg-background'>
              <Nav />
              {children}
              <Footer />
            </div>
          </Providers>
        </body>
      </ProviderApp>
    </html>
  )
}
