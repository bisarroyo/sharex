'use client'
import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { useSelector, useDispatch } from 'react-redux'
import { loadPosts } from '../app/reducers/slice'

export default function usePosts() {
  const dispatch = useDispatch()

  const posts = useSelector((state) => state.posts.posts)

  const [loading, setLoading] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)
  const [offset, setOffset] = useState(0) // Keep track of loaded posts offset
  const [limit, setLimit] = useState(5) // Number of posts to load per batch
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const supabase = createClientComponentClient()

  useEffect(() => {
    const loadMorePosts = async () => {
      try {
        setLoading(true)
        let { data: newPosts, error } = await supabase
          .from('posts')
          .select('*')
          .range(offset, offset + limit - 1)

        if (error) {
          console.error(error)
          return
        }
        console.log(offset)

        const postsWithImagesArray = []

        for (const post of newPosts) {
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

        dispatch(loadPosts([...postsWithImagesArray])) // Append new posts to existing posts
        setOffset((prevOffset) => prevOffset + limit) // Update the offset for the next batch
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
      setPrevScrollY(window.scrollY)
      setIsScrolling(false) // Reset scrolling flag
    }

    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const scrolledDistance = window.scrollY

      if (
        !isScrolling &&
        scrolledDistance > prevScrollY &&
        scrolledDistance >= scrollableHeight * 0.8 &&
        !loading
      ) {
        setIsScrolling(true)
        loadMorePosts() // Cargar más contenido cuando se acerca al 80% del scroll
      }
      setPrevScrollY(scrolledDistance)
    }

    if (initialLoad) {
      loadMorePosts() // Load initial posts
      setInitialLoad(false)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll) // Limpieza al desmontar el componente
    }
  }, [
    dispatch,
    offset,
    limit,
    loading,
    posts,
    supabase,
    initialLoad,
    prevScrollY,
    isScrolling
  ])

  return {
    loading
  }
}
