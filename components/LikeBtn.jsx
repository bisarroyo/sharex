'use client'

import { useState } from 'react'

import { IconHeart, IconHeartFilled } from '@tabler/icons-react'

export default function LikeBtn() {
  const [like, setLike] = useState(false)
  const handleLike = () => {
    setLike(!like)
  }

  return (
    <button onClick={handleLike}>
      {like ? (
        <IconHeartFilled className='h-7 w-7' />
      ) : (
        <IconHeart className='h-7 w-7' />
      )}
    </button>
  )
}
