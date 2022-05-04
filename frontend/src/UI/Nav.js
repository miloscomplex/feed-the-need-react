import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

/* are they login as donator or need? */
function Nav(props) {

  const isUserSet = props.userProps
  const showLink = () => isUserSet  ? isUserSet.id : ''

  return (  
    <div className='nav'>
      <div className='nav__links'>
        { !isUserSet ? <Link to='/sign-up'>Sign Up</Link> : <a href={`/users/${showLink()}`} >Home</a> }
        <Link to='/items'>Items</Link>
        <Link to='/needy'>Needy</Link>
      </div>
      <div className='nav__login'>
        <div className='nav__login__div'></div>
          { !isUserSet ? <Link to='/login'>Log In</Link> : <Link to='/logout'>Log Out</Link> }
      </div>
    </div>
  )
}

export default Nav;
