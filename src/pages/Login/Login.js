import React from 'react'
import styles from './Login.module.css'

import {useAuthentication} from '../../hooks/useAuthentication'

import { useState, useEffect } from 'react'

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const {login, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      email,
      password
    }

    const res = await login(user)
  }

  useEffect(() => {
    if(authError) {
      setError(authError)
    }

  },[authError])

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça login e compartilhe seus momentos.</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name='email'
            placeholder='Nome do usuário'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name='password'
            placeholder='Insira sua senha'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {!loading && <button className='btn'>Entrar</button>}
        {loading && <button className='btn' disabled>Aguarde</button>}
        <div className="container">
          {error && <p className="error ">{error}</p>}
        </div>
      </form>
    </div>
  )
}
