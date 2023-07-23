import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import Logout from '@/components/LogOut'
import styles from './styles/navbar.module.css'
import Link from 'next/link'
import Button from './Button'
import Notification from './Notification'

export default async function Navbar() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user }
  } = await supabase.auth.getUser()

  return (
    <header className={styles.header}>
      <nav className={styles.header_navigation}>
        <div className={styles.header_left_side}>
          <Link href='/'>Sharex</Link>
        </div>
        <div className={styles.header_right_side}>
          {console.log(user)}
          {!user?.email ? (
            <>
              <p>
                <Link href='/signup' className={styles.link}>
                  Sign Up
                </Link>{' '}
                or &nbsp;{' '}
              </p>
              <Button text='Log In' url='/login' />
            </>
          ) : (
            <>
              <Logout />
              <Notification />
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
