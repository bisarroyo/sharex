'use client'

import styles from './styles/loginform.module.css'

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
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      setErrorMessage('Contraseña incorresta o usuario no registrado')
      // console.log(errorMessage)
    }
    if (data.user) {
      console.log(data)
      router.push('/')
      router.refresh()
    }
  }

  return (
    <>
      <form className={styles.form}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          placeholder='********'
          value={password}
          autoComplete='on'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignIn}>Sign in</button>
      </form>
      <div>
        <>{errorMessage && errorMessage}</>
      </div>
    </>
  )
}
