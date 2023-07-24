'use client'

import styles from './styles/signupform.module.css'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SignUpForm() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    password_2: '',
    date_of_birth: ''
  })
  const [errorMessage, setErrorMessage] = useState(null)
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSignUp = async (event) => {
    event.preventDefault()
    const { email, password, password_2, date_of_birth } = user
    if (password !== password_2) {
      setErrorMessage('Passwords do not match')
      return
    }
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters')
      return
    }
    if (date_of_birth === '') {
      setErrorMessage('Date of birth is required')
      return
    }
    let { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`
      }
    })
    if (data.user) {
      console.log(data)
    }
    router.refresh()
  }

  return (
    <>
      <form className={styles.form}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          placeholder='email'
          value={user.email}
          onChange={handleUser}
        />
        <label htmlFor='date_of_birth'>Date of Birth</label>
        <input
          type='date'
          name='date_of_birth'
          placeholder='00/00/0000'
          value={user.date_of_birth}
          onChange={handleUser}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          placeholder='********'
          autoComplete='on'
          value={user.password}
          onChange={handleUser}
        />
        <label htmlFor='password_2'>Confirm your password</label>
        <input
          type='password'
          name='password_2'
          placeholder='********'
          autoComplete='on'
          value={user.password_2}
          onChange={handleUser}
        />
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
    </>
  )
}
