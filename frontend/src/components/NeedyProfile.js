import { Link } from 'react-router-dom'

function NeedyProfile() {
  return (
    <div id='content'>
      <h1> This is Needy.name</h1>

      <p className='about'>
        Needy.profile goes here
      </p>

      <h3>This person is in need of:</h3>

      <ul>
        <li>Nothing at this time</li>
      </ul>

      <Link to='/' className='plain'>Back To Your Profile</Link>
    </div>

  )
}

export default NeedyProfile;
