'use client'
import { Button } from '@nextui-org/button'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { AiOutlineCloudUpload, AiOutlineDrag } from 'react-icons/ai'

import SwiperComponent from '@/components/SwiperComponent'

export default function UploadFile({ uploading, handleUpload }) {
  const [selectedFile, setSelectedFile] = useState(null)

  const onDrop = useCallback((acceptedFiles) => {
    // Si se selecciona más de un archivo, seleccionamos solo el primero
    setSelectedFile(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 10,
    acceptedFiles: '.jpg,.png,.webp',
    onDrop: (acceptedFiles, fileRejections) => {
      if (fileRejections.length) {
        setErrorMessage('Error: archivo no válido')
      } else {
        onDrop(acceptedFiles)
      }
    }
  })

  return (
    <>
      <div className='w-full text-center h-auto cursor-pointer flex justify-center flex-col items-center '>
        <div {...getRootProps()} className='py-7'>
          <input {...getInputProps()} />
          {isDragActive ? (
            <div>
              <div className=''>
                <AiOutlineDrag />
              </div>
              <p>Suelta el archivo aquí...</p>
            </div>
          ) : (
            <div className='flex justify-center flex-col items-center'>
              <div className=''>
                <AiOutlineCloudUpload />
              </div>
              <p>
                Arrastra y suelta archivos aquí, o haz clic para seleccionar un
                archivo
              </p>
            </div>
          )}
        </div>
        {selectedFile && (
          <>
            <div className='relative w-screen h-96 flex justify-center flex-col items-center '>
              <SwiperComponent images={selectedFile} />
            </div>
            <Button
              className='mt-6'
              color='primary'
              onClick={() => handleUpload(selectedFile)}
              isLoading={uploading}
            >
              {uploading ? 'Cargando...' : 'Subir'}
            </Button>
          </>
        )}
      </div>
    </>
  )
}
