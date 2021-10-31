import { Link } from 'react-router-dom'
import Login from './Login'

function Landing() {
  return (
    <div id='content'>
      <h1>Welcome to Feed The Need</h1>
      <p class="emphasis">We, as a society, are more and more becoming cashless and dependent upon electronic transactions. A shortfall of this situation is that people in need are deprived; more frequently, people no longer have those couple of dollars or loose change in their purse or pocket to help them out.
      </p>
      <subhead>Do you need help?</subhead>
      <Link to='/sign-up'>Sign-up</Link>

      <subhead>Do you want to help?</subhead>
      <Link to='/sign-up'>Sign-up</Link>

      <Login />

    </div>

  )
}

export default Landing;
