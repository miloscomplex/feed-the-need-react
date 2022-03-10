import { Link } from 'react-router-dom'

/* are they login as donator or need? */
function Nav() {

  const isTokenSet = localStorage.token 

  return (  
    <div className='nav'>
      <div className='nav__links'>
        <Link to='/'>Home</Link>
        { isTokenSet ? <Link to='/login'>Log In</Link> : <Link to='/logout'>Log Out</Link> }
        <Link to='/sign-up'>Sign Up</Link>
      </div>
      <div className='nav__login'>
        <div className='nav__login__div icon-basic-case'></div>
        <Link to='/needy/'>Log In</Link>
      </div>
    </div>
  )
}

export default Nav;
