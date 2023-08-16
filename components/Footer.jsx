'use client'

import { usePathname } from 'next/navigation'

// home icon
import { RiHome2Line } from 'react-icons/ri'

// home icon fill
import { RiHome2Fill } from 'react-icons/ri'

// message icons
import { RiChat4Line } from 'react-icons/ri'

// message icon fill
import { RiChat4Fill } from 'react-icons/ri'

// profile icon
import { BsPerson } from 'react-icons/bs'

// profile icon fill
import { BsPersonFill } from 'react-icons/bs'

// create icon
import { BsPlusCircle } from 'react-icons/bs'

// create icon fill
import { BsPlusCircleFill } from 'react-icons/bs'
import Link from 'next/link'

export default function Footer() {
  const path = usePathname()

  return (
    <footer className='fixed bottom-0 h-[60px] w-screen backdrop-blur-lg flex flex-row justify-around items-center z-10'>
      <Link href='/'>
        <div className=''>
          {path === '/' ? (
            <RiHome2Fill className='' />
          ) : (
            <RiHome2Line className='' />
          )}
        </div>
      </Link>
      <Link href='/upload'>
        <div className=''>
          {path === '/upload' ? (
            <BsPlusCircleFill className='' />
          ) : (
            <BsPlusCircle className='' />
          )}
        </div>
      </Link>
      <Link href='/messages'>
        <div className=''>
          {path === '/messages' ? (
            <RiChat4Fill className='' />
          ) : (
            <RiChat4Line className='' />
          )}
        </div>
      </Link>
      <Link href='/profile'>
        <div className=''>
          {path === '/profile' ? (
            <BsPersonFill className='' />
          ) : (
            <BsPerson className='' />
          )}
        </div>
      </Link>
    </footer>
  )
}
