'use client'

import UploadFile from '@/components/UploadFile'
import useUploadCloudinary from '@/hooks/useUploadCloudinary'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Upload() {
  const [userAuth, setUserAuth] = useState({})
  const [message, setMessage] = useState('')
  const { uploading, cloudImageUrl, errorMessage, handleImageChange } =
    useUploadCloudinary()

  const { user } = userAuth

  const router = useRouter()

  const supabase = createClientComponentClient()

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUserAuth(data)
    }
    getUser()
  }, [supabase.auth])

  useEffect(() => {
    const insertPost = async () => {
      const { data: posts, error } = await supabase.from('posts').insert({
        user: user.id,
        order: 1,
        is_public: true
        // images: cloudImageUrl
      })
      // router.push('/')
      router.refresh()
    }
    if (cloudImageUrl) {
      insertPost()
    }
  }, [cloudImageUrl, supabase, router, user])

  const handleUpload = (file) => {
    handleImageChange(file)
  }

  return (
    <div>
      <h1>Upload</h1>
      <UploadFile uploading={uploading} handleUpload={handleUpload} />
    </div>
  )
}
