import React, { useState } from 'react';
import { API_ROOT, HEADERS } from '../constants'
import { useHistory } from "react-router-dom";


function Login(props) {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  function handleOnSubmit(event) {
    event.preventDefault()

    fetch(`${API_ROOT}/login`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({email, password})
    }).then(resp => resp.json())
    .then(data => {
      localStorage.setItem('token', data.token)
      // send to App Component State
      // remember data is {token: token, user: user}
      // setUser(data.user)
      setEmail('')
      setPassword('')
      history.push('/feed-the-need/needy')

    })
  }

  return (
    <div className='login'>
      <div className='login__wrapper'>
        <h2>Login for Donator & Needy</h2>
        <form name='login__BoxForm' onSubmit={ ev => handleOnSubmit} >

          <label for='email'>Email:</label>
          <input type='text'
            name='email'
            onChange={ ev => {setEmail(ev.target.value)}}
            value={email.email}
          />

          <label for='password'>Password:</label>
          <input type='text'
            name='password'
            onChange={ ev => {setPassword(ev.target.value)}}
            value={email.password}
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
