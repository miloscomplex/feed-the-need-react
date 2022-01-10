import React, { useState } from 'react';

function AddItem() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [email, setEmail] = useState();
  const [about, setAbout] = useState();

  function handleOnSubmit(event) {
    event.preventDefault()
    alert(`you have submited ${name}`)
  }

  return (
    <div id='content' className='add-item'>
      <div className='add-item__wrapper'>
        <h2>Edit your needs</h2>
        <form name='add-item__boxForm' onSubmit={event => handleOnSubmit(event)} >
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

export default AddItem;
