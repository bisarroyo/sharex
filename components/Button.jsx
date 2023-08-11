'use client'

import { useRouter } from 'next/navigation'

import styles from './styles/button.module.css'

export default function Button({ text, url }) {
  const router = useRouter()

  const handleClick = (url) => {
    router.push(`${url}`)
  }
  return (
    <button
      onClick={() => handleClick(url)}
      type='button'
      className={styles.button}
    >
      {text}
    </button>
  )
}
