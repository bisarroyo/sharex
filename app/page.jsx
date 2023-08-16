import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import Post from '@/components/Post'

export default async function Home() {
  const supabase = createClientComponentClient()

  let { data: posts, error } = await supabase.from('posts').select('*')

  return (
    <main className='flex items-center justify-center'>
      <section className='max-w-[500px]'>
        {posts.map((post) => {
          return (
            <>
              <Post key={post.id} postImages={post.images} />
            </>
          )
        })}
      </section>
    </main>
  )
}
