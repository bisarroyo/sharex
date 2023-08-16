'use client'

import { IconBookmark, IconBookmarkFilled } from '@tabler/icons-react'
import { useState } from 'react'

export default function BookmarkBtn() {
  const [bookmark, setBookmark] = useState(false)
  const handleBookmark = () => {
    setBookmark(!bookmark)
  }

  return (
    <button onClick={handleBookmark}>
      {bookmark ? (
        <IconBookmarkFilled className='h-7 w-7' />
      ) : (
        <IconBookmark className='h-7 w-7' />
      )}
    </button>
  )
}
