import React from 'react'

import styles from './Register.module.css'
import {useAuthentication} from '../../hooks/useAuthentication'

import { useState, useEffect } from 'react'

export const Register = () => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const {createUser, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!")
      console.log(error)
      return
    }

    const res = await createUser(user)
    console.log(res)
  }

  useEffect(() => {
    if(authError) {
      setError(authError)
    }

  },[authError])

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe seus momentos.</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name='name'
            placeholder='Nome do usuário'
            required
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
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
        <label>
          <span>Confirme sua senha:</span>
          <input
            type="password"
            name='confirmPassword'
            placeholder='Confirme sua senha'
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className='btn'>Cadastrar</button>}
        {loading && <button className='btn' disabled>Aguarde</button>}
        <div className="container">
          {error && <p className="error ">{error}</p>}
        </div>
      </form>
    </div>
  )
}
