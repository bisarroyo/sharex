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

  const handleUpload = (file) => {
    handleImageChange(file)
  }
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUserAuth(data)
    }
    getUser()
  }, [supabase.auth])
  console.log(user)

  useEffect(() => {
    const insertPost = async () => {
      await supabase.from('posts').insert([
        {
          images: [
            {
              id: 1,
              urlCloud: cloudImageUrl
            }
          ],
          user: user.id,
          order: 1
        }
      ])
      router.push('/')
      router.refresh()
    }
    if (cloudImageUrl) {
      insertPost()
      setMessage('cargado exitosamente')
    }
  }, [cloudImageUrl, supabase, setMessage])

  if (!user) {
    router.push('/login')
    return
  }
  return (
    <div>
      <h1>Upload</h1>
      <UploadFile uploading={uploading} handleUpload={handleUpload} />
      {message && <p>{setMessage}</p>}
    </div>
  )
}
