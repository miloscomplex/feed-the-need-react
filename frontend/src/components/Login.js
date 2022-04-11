import React, { useState, Component } from 'react';
import { API_ROOT, HEADERS } from '../constants'
import { useHistory } from "react-router-dom"

function Login(props) {

  const setUserProps = props.setUserProps
  const userProps = props.userProps

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  function handleOnSubmit(event) {
    event.preventDefault()

    const processResp = (data) => {
      console.log(`logging the data`, data.user)
      localStorage.setItem('token', data.token)
      setUserProps(data.user)
      history.push(`/users/${userProps.id}`)
    }

    fetch(`${API_ROOT}/login`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({email, password})
    }).then(resp => {
      if (resp.status >= 400) {
        throw new Error("Server responded with an error!")
      }
      return resp.json()
    })
    .then(data => {
      processResp(data)
    }, 
    err => {
      console.log('an error has occured')
      history.push(`/login`)
    })
    setEmail('')
    setPassword('')
  }

  return (

    <div className='login'>
      <div className='login__wrapper'>
        <h2>Login for Donator & Needy</h2>
        <form name='login__BoxForm' onSubmit={ ev => handleOnSubmit(ev, setUserProps) } >

          <label>Email:</label>
          <input type='text'
            name='email'
            onChange={ ev => {setEmail(ev.target.value)}}
            value={email.email}
          />

          <label>Password:</label>
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

const mapStateToProps = (state) => {
  return {
    token: state.token
  }
}

export default Login;
