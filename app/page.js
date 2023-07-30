import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import styles from './page.module.css'

import Post from '@/components/Post'

export default async function Home() {
  const supabase = createClientComponentClient()

  let { data: posts, error } = await supabase.from('posts').select('*')

  console.log(posts)

  return (
    <main className={styles.main}>
      {posts.map((post) => {
        return <Post key={post.id} postImages={post.images} />
      })}
    </main>
  )
}
