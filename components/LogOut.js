'use client'

import styles from './styles/logout.module.css'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function Logout() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleLogOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <button onClick={handleLogOut} className={styles.logout}>
      Log Out
    </button>
  )
}
