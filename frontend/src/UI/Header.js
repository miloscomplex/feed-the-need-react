import Nav from './Nav'

/* are they login as donator or need? */
function Header() {
  return (
    <div className='header'>
      <Nav />
      <h1 className='header__landing-header'>
        <div className='header__landing-header__eyebrow'>Welcome to</div>Feed The Need
      </h1>
    </div>
  )
}

export default Header;
