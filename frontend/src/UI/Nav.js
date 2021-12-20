import { Link } from 'react-router-dom'

/* are they login as donator or need? */
function Nav() {
  return (
    <nav className='nav'>
      <nav-links className='nav__links'>
        <Link to='/'>Home</Link>
        <Link to=''>Log In</Link>
        <Link to='/sign-up'>Sign Up</Link>
      </nav-links>
    </nav>
  )
}

export default Nav;
