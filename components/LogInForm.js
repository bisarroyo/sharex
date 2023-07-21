'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LogInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignIn = async (event) => {
    event.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      return
    }
    router.push('/')
  }

  return (
    <>
      <form>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='********'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignIn}>Sign in</button>
      </form>
    </>
  )
}
