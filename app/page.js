import Image from 'next/image'
import styles from './page.module.css'

// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
// import { cookies } from 'next/headers'
import Post from '@/components/Post'

export default async function Home() {
  // const supabase = createServerComponentClient({ cookies })

  // const {
  //   data: { user }
  // } = await supabase.auth.getUser()
  return (
    <main>
      <Post />
    </main>
  )
}
