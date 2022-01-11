import Nav from './Nav'

/* are they login as donator or need? */
function HeaderNeedy() {
  return (
    <header className='header header-needy'>
      <Nav />
      <h1 class='header__landing-header'>
        <div class='header__landing-header__eyebrow'>Needy Landing</div>
      </h1>
    </header>
  )
}

export default HeaderNeedy;
