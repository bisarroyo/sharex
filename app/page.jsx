'use client'
import usePosts from '@/hooks/usePosts'

import { useSelector } from 'react-redux'

import Post from '@/components/Post'

export default function Home() {
  const { loading } = usePosts()

  const posts = useSelector((state) => state.posts.posts)

  console.log(posts)

  return (
    <main className='flex items-center justify-center pb-[60px]'>
      <section className='max-w-[500px]'>
        {posts.map((post) => {
          return (
            <section key={post.id}>
              <Post postImages={post.images} />
            </section>
          )
        })}
      </section>
    </main>
  )
}
