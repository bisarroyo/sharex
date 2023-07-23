import styles from './page.module.css'

import Post from '@/components/Post'

export default async function Home() {
  return (
    <main className={styles.main}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </main>
  )
}
