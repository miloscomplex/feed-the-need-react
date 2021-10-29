import { Link } from 'react-router-dom'

function DonatorProfile() {
  return (
    <div id='content'>
      <h1>Hello There, donator.name</h1>
      <span><strong>Your registered email is:</strong> donator.email </span>
      <p class='about'><strong>About You:</strong> donator.about </p>

      <p><Link to=''>Edit your profile</p>

      <activity>
        <h3>Your Recent Activity</h3>
        <p>You have no recent activity to display</p>
      </activity>
    </div>
  )
}

export default DonatorProfile;
