import { Link } from 'react-router-dom'

/* are they login as donator or need? */
function Nav() {
  return (
    <nav className='nav'>
      <nav-links className='nav__links'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Log In</Link>
        <Link to='/sign-up'>Sign Up</Link>
      </nav-links>
      <login className='nav__login'>
        <div className='nav__login__div icon-basic-case'></div>
        <Link to='/needy/'>Log In</Link>
      </login>
    </nav>
  )
}

export default Nav;
