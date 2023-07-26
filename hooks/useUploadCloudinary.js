'use client'

// imports from cloudinary
import { useEffect, useState } from 'react'
import { API, cloudinary } from '@/utils/cloudinary'

export default function useUploadCloudinary() {
  const [image, setImage] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [cloudImageUrl, setCloudImageUrl] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    if (image) {
      const fetchData = async () => {
        try {
          setUploading(true)
          const data = new FormData()
          data.append('upload_preset', 'sharex')
          data.append('file', image)
          data.append('timestamp', Date.now() / 1000)
          data.append('api_key', 419246144839172)
          const res = await fetch(API, {
            method: 'POST',
            body: data
          })
          const { secure_url: url, public_id: publicId } = await res.json()
          const cloudImage = cloudinary.image(publicId)
          cloudImage
          console.log(publicId)
          setCloudImageUrl(cloudImage)
          setUploading(false)
        } catch (err) {
          setErrorMessage('Error uploading file')
          setUploading(false)
        }
      }
      fetchData()
    }
  }, [image])

  const handleImageChange = (image) => {
    setImage(image)
  }

  return {
    image,
    uploading,
    cloudImageUrl,
    errorMessage,
    handleImageChange
  }
}
