import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

/* are they login as donator or need? */
function Nav(props) {

  const token = localStorage.token
  const isUserSet = props.userProps
  const link = isUserSet  ? isUserSet.id : ''

  return (  
    <div className='nav'>
      <div className='nav__links'>
        { !isUserSet ? <Link to='/sign-up'>Sign Up</Link> : <a href={`/users/${link}`} >Home</a> }
      </div>
      <div className='nav__login'>
        <div className='nav__login__div'></div>

        <Link to='/items/'>Items</Link>

        { !isUserSet ? <Link to='/login'>Log In</Link> : <Link to='/logout'>Log Out</Link> }
      </div>
    </div>
  )
}

export default Nav;
