import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sharex social media',
  description: 'Share experiences through the app'
}

export const dynamic = 'force-dynamic'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
