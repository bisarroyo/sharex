'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { useSelector, useDispatch } from 'react-redux'
import { postsSlice } from './reducers/slice'

import Post from '@/components/Post'
import { useEffect, useState } from 'react'

export default function Home() {
  const [postsWithImages, setPostsWithImages] = useState([])
  const [loading, setLoading] = useState(false)
  const supabase = createClientComponentClient()

  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true)
        let { data: posts, error } = await supabase.from('posts').select('*')

        if (error) {
          console.error(error)
          return []
        }

        const postsWithImagesArray = []

        for (const post of posts) {
          const { data: images, error: imageError } = await supabase
            .from('post_images')
            .select('image_url')
            .eq('post_id', post.id)

          if (imageError) {
            console.error(imageError)
            continue
          }

          const imagesArray = images.map((image) => image.image_url)
          postsWithImagesArray.push({ ...post, images: imagesArray })
        }

        setPostsWithImages(postsWithImagesArray)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
        dispatch(postsSlice(postsWithImages))
      }
    }
    getPosts()
  }, [supabase, dispatch, postsWithImages])

  console.log(posts)

  return (
    <main className='flex items-center justify-center pb-[60px]'>
      <section className='max-w-[500px]'>
        {postsWithImages.map((post) => {
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
