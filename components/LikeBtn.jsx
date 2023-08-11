'use client'

import { useState } from 'react'
// No liked post icon
import { BsHeart } from 'react-icons/bs'

// Liked post icon
import { BsHeartFill } from 'react-icons/bs'

function IconHeart() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 21.35l-1.45-1.32C5.4 16.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 7.86-8.55 11.54L12 21.35z' />
    </svg>
  )
}

function IconHeartFill() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='currentColor'
    >
      <path d='M12 21.35l-1.45-1.32C5.4 16.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 7.86-8.55 11.54L12 21.35z' />
    </svg>
  )
}

export default function LikeBtn() {
  const [like, setLike] = useState(false)
  const handleLike = () => {
    setLike(!like)
  }

  return (
    <button onClick={handleLike}>
      {like ? <IconHeartFill /> : <IconHeart />}
    </button>
  )
}
