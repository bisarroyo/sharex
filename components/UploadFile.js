'use client'

import styles from './styles/uploadfile.module.css'
import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { AiOutlineCloudUpload, AiOutlineDrag } from 'react-icons/ai'

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
      <div className={styles.dropContainer}>
        <div {...getRootProps()} className={styles.dropBox}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <div>
              <div className={styles.uploadIcon}>
                <AiOutlineDrag />
              </div>
              <p>Suelta el archivo aquí...</p>
            </div>
          ) : (
            <div>
              <div className={styles.uploadIcon}>
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
            <div className={styles.imageLoaded}>
              {selectedFile.map((file, index) => (
                <div key={index}>
                  <Image
                    fill={true}
                    style={{ objectFit: 'contain' }}
                    src={URL.createObjectURL(file)}
                    alt='Archivo seleccionado'
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => handleUpload(selectedFile)}
              className={styles.button}
            >
              {uploading ? 'Cargando...' : 'Subir'}
            </button>
          </>
        )}
      </div>
    </>
  )
}
