'use client'

import UploadFile from '@/components/UploadFile'
import useUploadCloudinary from '@/hooks/useUploadCloudinary'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

export default function Upload() {
  const { message, setMessage } = useState('sin mensaje')
  const { uploading, cloudImageUrl, errorMessage, handleImageChange } =
    useUploadCloudinary()

  const supabase = createClientComponentClient()

  const handleUpload = (file) => {
    handleImageChange(file)
  }
  useEffect(() => {
    const insertPost = async () => {
      const { data } = await supabase.auth.getUser()
      await supabase.from('posts').insert([
        {
          images: [
            {
              id: 1,
              urlCloud: cloudImageUrl
            }
          ],
          user: data.user.id,
          order: 1
        }
      ])
    }
    if (cloudImageUrl) {
      insertPost()
      // setMessage('cargado exitosamente')
    }
  }, [cloudImageUrl, supabase, setMessage])
  return (
    <div>
      <h1>Upload</h1>
      <UploadFile uploading={uploading} handleUpload={handleUpload} />
      {message && <p>{setMessage}</p>}
    </div>
  )
}
