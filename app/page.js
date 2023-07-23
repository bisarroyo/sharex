import Image from 'next/image'
import styles from './page.module.css'

import Post from '@/components/Post'

export default async function Home() {
  return (
    <main>
      <Post />
    </main>
  )
}
