import { Link } from 'react-router-dom'

function NeedyLanding() {
  return (
    <div id='content'>
      <h1>Hello [Needy.name]</h1>
      <h2>This is your personal home page</h2>
      <p className='bio'><strong>Your Bio</strong> bio goes here</p>

      <Link to=''>Edit your profile</Link>

      <h2>Your List Of Needs</h2>
      <ul>
        <li>List of needs goes here</li>
      </ul>

      <Link to=''>Edit Your List of Needs</Link>

      <activity>
        <h2>Recently donated items</h2>
        <ul>
          <li>No Items have been donated</li>
        </ul>
      </activity>

      <p>
        <Link className='plain' to=''>Delete Your Profile</Link>
      </p>


    </div>
  )
}

export default NeedyLanding;
