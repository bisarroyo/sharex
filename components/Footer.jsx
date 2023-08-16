'use client'

import {
  IconHome,
  IconHomeCheck,
  IconSquareRoundedPlus,
  IconSquareRoundedPlusFilled,
  IconMessageCircle2,
  IconMessageCircle2Filled,
  IconUser,
  IconUserCheck
} from '@tabler/icons-react'

import { usePathname } from 'next/navigation'

import Link from 'next/link'

export default function Footer() {
  const path = usePathname()

  return (
    <footer className='fixed bottom-0 h-[60px] w-screen backdrop-blur-lg bg-gray-950/[.9] flex flex-row justify-around items-center z-10'>
      <Link href='/'>
        <div className=''>
          {path === '/' ? <IconHomeCheck /> : <IconHome />}
        </div>
      </Link>
      <Link href='/upload'>
        <div className=''>
          {path === '/upload' ? (
            <IconSquareRoundedPlusFilled />
          ) : (
            <IconSquareRoundedPlus />
          )}
        </div>
      </Link>
      <Link href='/messages'>
        <div className=''>
          {path === '/messages' ? (
            <IconMessageCircle2Filled />
          ) : (
            <IconMessageCircle2 />
          )}
        </div>
      </Link>
      <Link href='/profile'>
        <div className=''>
          {path === '/profile' ? <IconUserCheck /> : <IconUser />}
        </div>
      </Link>
    </footer>
  )
}
