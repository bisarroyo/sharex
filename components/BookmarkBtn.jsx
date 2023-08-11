'use client'

import { useState } from 'react'

function IconBookmark({ props }) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 16 16'
      height='1.5rem'
      width='1.5rem'
      {...props}
    >
      <path d='M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z' />
    </svg>
  )
}

function IconBookmarkFill({ props }) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 16 16'
      height='1.5rem'
      width='1.5rem'
      {...props}
    >
      <path d='M2 2v13.5a.5.5 0 00.74.439L8 13.069l5.26 2.87A.5.5 0 0014 15.5V2a2 2 0 00-2-2H4a2 2 0 00-2 2z' />
    </svg>
  )
}

export default function BookmarkBtn() {
  const [bookmark, setBookmark] = useState(false)
  const handleBookmark = () => {
    setBookmark(!bookmark)
  }

  return (
    <button onClick={handleBookmark}>
      {bookmark ? <IconBookmarkFill /> : <IconBookmark />}
    </button>
  )
}
