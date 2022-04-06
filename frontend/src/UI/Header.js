import Nav from './Nav'

/* are they login as donator or need? */
function Header(props) {
  return (
    <div className='header'>
      <Nav userProps={props.userProps} />
      <h1 className='header__landing-header'>
        <div className='header__landing-header__eyebrow'>Welcome to</div>Feed The Need
      </h1>
    </div>
  )
}

export default Header;
