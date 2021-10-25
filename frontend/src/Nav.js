import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      /* are they login as donator or need? */
      <Link to=''>Home</Link>
      <Link to=''>Log In</Link>
      <Link to=''>Sign Up</Link>
    </nav>
  )
}

export default Nav;
