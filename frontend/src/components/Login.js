import React, { useState } from 'react';
import { API_ROOT, HEADERS } from '../constants'

function Login() {


  const [inputField, setInputField] = useState({
    email: '',
    password: ''
  })

  const [user, setUser] = useState()

  const inputsHandler = (e) => {
    console.log(e.target)
    setInputField( {[e.target.name]: e.target.value} )
  }

  function handleOnSubmit(event) {
    event.preventDefault()

    fetch(`${API_ROOT}/login`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(inputField)
    }).then(resp => resp.json())
    .then(data => {
      localStorage.setItem('token', data.token)
      // remember data is {token: token, user: user}
      setUser(data.user)
    })
  }

  return (
    <div className='login'>
      <div className='login__wrapper'>
        <h2>Login for Donator & Needy</h2>
        <form name='login__BoxForm' onSubmit={handleOnSubmit} >

          <label for='email'>Email:</label>
          <input type='text'
            name='email'
            onChange={inputsHandler}
            value={inputField.email}
          />

          <label for='password'>Password:</label>
          <input type='text'
            name='password'
            onChange={inputsHandler}
            value={inputField.password}

          />

          <input
            type='submit'
            value='submit'
            className='cta__btn'
          />
        </form>
      </div>
    </div>

  )
}

export default Login;
