// passdown props to adjust form for donator or needy
import React, { useState } from 'react';
import { API_ROOT, HEADERS } from '../constants'
import { useHistory } from "react-router-dom";

function SignUp(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [bio, setBio] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const user_type = props.userType
  const history = useHistory()

  function handleOnSubmit(event) {
    event.preventDefault()
    alert(`${name} has been submitted`)
    fetch(`${API_ROOT}/users`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({ name, email, bio, user_type, password, passwordConfirm })
    }).then(resp => resp.json())
    .then(data => {
      console.log(`logging the data`, data)
      localStorage.setItem('token', data.token)
      // send to App Component State
      // remember data is {token: token, user: user}
      setEmail('')
      setPassword('')
      history.push(`/#{userType}`)
    })
  }

  return (
    <div id='content' class='signup'>
      <div class='signup__div'>
        <h1>Sign Up Below</h1>
        <form name='signUpForm' className="signup__form" onSubmit={ e => handleOnSubmit(e)} >
          <label>Name:</label>
          <input type='text' name='name' onChange={e => setName(e.target.value)} />

          <label>Email:</label>
          <input type='text' name='email' onChange={e => setEmail(e.target.value)} />

          <label>About:</label>
          <textarea name='about' onChange={e => setBio(e.target.value)} />

          <label>Password:</label>
          <input type='text' name='password' onChange={e => setPassword(e.target.value)} />

          <label>Password Confirmation</label>
          <input type='text' name='password-confirm' onChange={e => setPasswordConfirm(e.target.value)} />

          <input type='submit' value='submit' />
        </form>
      </div>
    </div>
  )
}

export default SignUp;
