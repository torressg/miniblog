import React from 'react'

import styles from './Register.module.css'

import { useState, useEffect } from 'react'

export const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe seus momentos.</p>
      <form >
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name='name'
            placeholder='Nome do usuário'
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name='email'
            placeholder='Nome do usuário'
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name='password'
            placeholder='Insira sua senha'
          />
        </label>
        <label>
          <span>Confirme sua senha:</span>
          <input
            type="password"
            name='confirmPassword'
            placeholder='Confirme sua senha'
          />
        </label>
        <button className='btn'>Cadastrar</button>
      </form>
    </div>
  )
}
