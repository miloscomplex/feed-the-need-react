import { Link } from 'react-router-dom'

/* are they login as donator or need? */
function Nav() {
  return (
    <nav>
      <Link to=''>Home</Link>
      <Link to=''>Log In</Link>
      <Link to=''>Sign Up</Link>
    </nav>
  )
}

export default Nav;
