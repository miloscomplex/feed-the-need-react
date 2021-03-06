import { Link } from 'react-router-dom'
import Header from '../../UI/Header'

function DonatorLanding() {
  return (
    <div id='wrapper'>
      <Header />
      <div id='content'>
        <h1>Hello There, [Donator.name]</h1>
        <h2>This is your personal home page</h2>
        <span>
          <strong>Your registered email is:</strong> donator.email
        </span>
        <p className='text__bio'>
          <strong>About You</strong> bio goes here
        </p>

        <Link to=''>Edit your profile</Link>

        <div className='activity'>
          <h3>Your Recent Activity</h3>
          <ul>
            <li>You have no recent div  to display</li>
          </ul>
        </div >

        <h2>People In Need</h2>

        <div className='list'>
          <p>There is no one currently in needy</p>
        </div>

        <p>
          <Link className='cta__plain' to=''>Delete Your Profile</Link>
        </p>


      </div>
    </div>
  )
}

export default DonatorLanding;
