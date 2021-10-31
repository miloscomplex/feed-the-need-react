import React, { useState } from 'react';

function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  function handleOnSubmit(event) {
    event.preventDefault()
    alert(`you have submited ${name}`)
  }

  return (
    <login>
      <h2>Login for Donator & Needy</h2>
      <form name='chatBoxForm' onSubmit={event => handleOnSubmit(event)} >
        <label for='name'>Name:</label>
        <input type='text' onChange={e => setName(e.target.value)} />

        <label for='password'>Password:</label>
        <input type='text' onChange={e => setPassword(e.target.value)} />
        
        <input type='submit' value='submit' />
      </form>
    </login>

  )
}

export default Login;
