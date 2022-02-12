// passdown props to adjust form for donator or needy
import React, { useState } from 'react';

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [about, setAbout] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  function handleOnSubmit(event) {
    event.preventDefault()
    alert(`${name} has been submitted`)
  }

  return (
    <div id='content' class='signup'>
      <div class='signup__div'>
        <h1>Sign Up Below</h1>
        <form name='signUpForm' className="signup__form" onSubmit={ e => handleOnSubmit(e)} >
          <label for='name'>Name:</label>
          <input type='text' name='name' onChange={e => setName(e.target.value)} />

          <label for='email'>Email:</label>
          <input type='text' name='email' onChange={e => setEmail(e.target.value)} />

          <label for='about'>About:</label>
          <textarea name='about' onChange={e => setAbout(e.target.value)} />

          <label for='password'>Password:</label>
          <input type='text' name='password' onChange={e => setPassword(e.target.value)} />

          <label for='password-confirm'>Password Confirmation</label>
          <input type='text' name='password-confirm' onChange={e => setPasswordConfirm(e.target.value)} />

          <input type='submit' value='submit' />
        </form>
      </div>
    </div>
  )
}

export default SignUp;
