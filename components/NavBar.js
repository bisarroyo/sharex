import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import Logout from '@/components/LogOut'
import styles from './styles/navbar.module.css'
import Link from 'next/link'
import Button from './Button'

export default async function Navbar() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user }
  } = await supabase.auth.getUser()

  console.log(user)

  return (
    <header className={styles.header}>
      <nav className={styles.header_navigation}>
        <div className={styles.header_left_side}>
          <Link href='/'>Sahrex</Link>
        </div>
        <div className={styles.header_right_side}>
          {user.email ? (
            <Button text='Log In' url='/login' />
          ) : (
            <Link href='/login'>Login</Link>
          )}
        </div>
      </nav>
    </header>
  )
}
