import Nav from './Nav'

/* are they login as donator or need? */
function Header() {
  return (
    <header className='header'>
      <Nav />
      <h1 class='header__landing-header'>
        <div class='header__landing-header__eyebrow'>Welcome to</div>Feed The Need
      </h1>
    </header>
  )
}

export default Header;
