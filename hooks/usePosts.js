'use client'
import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function usePosts() {
  const [postsWithImages, setPostsWithImages] = useState([])
  const [loading, setLoading] = useState(false)
  const supabase = createClientComponentClient()
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
      }
    }
    getPosts()
  }, [supabase])

  return {
    postsWithImages,
    loading
  }
}
