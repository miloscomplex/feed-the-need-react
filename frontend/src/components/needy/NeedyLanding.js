import { Link } from 'react-router-dom'

function NeedyLanding() {
  return (
    <div id='content' className='needy-landing'>
      <div className='needy-landing__bio'>
        <h1 className='needy-landing__h1'>
          Hello [Needy.name] This is your personal home page.
        </h1>
        <div className='needy-landing__bio-img'> </div>
        <p className='text__bio'>
          <strong>Your Bio</strong> bio goes here
        </p>

        <Link to='' className='needy-landing__btn'>Edit your profile</Link>
      </div>

      <h2>Your List Of Needs</h2>
      <ul className='needy-landing__ul'>
        <li>List of needs goes here</li>
        <li>List of needs goes here</li>
        <li>List of needs goes here</li>
        <li>List of needs goes here</li>
        <li>List of needs goes here</li>
        <li>List of needs goes here</li>
      </ul>

      <Link to='' className='needy-landing__btn'>Edit Your List of Needs</Link>

      <activity>
        <h2>Recently donated items</h2>
        <ul>
          <li>No Items have been donated</li>
        </ul>
      </activity>

      <p>
        <Link className='cta__plain' to=''>Delete Your Profile</Link>
      </p>


    </div>
  )
}

export default NeedyLanding;
