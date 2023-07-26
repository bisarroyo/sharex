'use client'

import UploadFile from '@/components/UploadFile'
import useUploadCloudinary from '@/hooks/useUploadCloudinary'

export default function Upload() {
  const { uploading, cloudImageUrl, errorMessage, handleImageChange } =
    useUploadCloudinary()

  const handleUpload = async (file) => {
    handleImageChange(file)
  }
  return (
    <div>
      <h1>Upload</h1>
      <UploadFile uploading={uploading} handleUpload={handleUpload} />
    </div>
  )
}
