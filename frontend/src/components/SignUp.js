// passdown props to adjust form for donator or needy
import React, { useState } from 'react';
import { API_ROOT, HEADERS } from '../constants'
import { useHistory } from "react-router-dom";

function SignUp(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [bio, setBio] = useState();
  const [password, setPassword] = useState();
  const [type, setType] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const user_type = 'needy'
  const history = useHistory()

  function handleOnSubmit(event) {
    event.preventDefault()
    alert(`${name} has been submitted`)
    fetch(`${API_ROOT}/users`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({ name, email, bio, user_type: user_type, password })
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
    <div id='content' className='signup'>
      <div className='signup__div'>
        <h1>Sign Up Below</h1>
        <form name='sign_up_form' className="signup__form" onSubmit={ e => handleOnSubmit(e)} >
          <label>Type of User</label>
          <div className='signup__div__div'>
            <input type='radio' label="donator" name="user_type" value="donator" onChange={ e => setType(e.target.value)} />
            <label for="donator" for="donator_id">Donator</label>
            <input type='radio' label="needy" value="needy" name="user_type" id='needy_id' onChange={ e => setType(e.target.value)} />
            <label for='needy' for='needy_id'>Needy</label>
          </div>

          <label>Name:</label>
          <input type='text' name='name' onChange={e => setName(e.target.value)} />

          <label>Email:</label>
          <input type='text' name='email' onChange={e => setEmail(e.target.value)} />

          <label>About:</label>
          <textarea name='about' onChange={e => setBio(e.target.value)} />

          <label>Password:</label>
          <input type='text' name='password' onChange={e => setPassword(e.target.value)} />

          <input type='submit' value='submit' />
        </form>
      </div>
    </div>
  )
}

export default SignUp;
