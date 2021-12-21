import { Link } from 'react-router-dom'
import Login from './Login'

function Landing() {
  return (
    <div id='content' class='landing'>
      <p class="text__emphasis, landing__text">We, as a society, are more and more becoming cashless and dependent upon electronic transactions. A shortfall of this situation is that people in need are deprived; more frequently, people no longer have those couple of dollars or loose change in their purse or pocket to help them out.
      </p>
      <div class='landing__cta-wrapper'>
        <div class='landing__cta-div'>
          <subhead>Do you need help?</subhead>
          <Link to='/sign-up'>Sign-up</Link>
        </div>
        <div class='landing__cta-div'>
          <subhead>Do you want to help?</subhead>
          <Link to='/sign-up'>Sign-up</Link>
        </div>
      </div>
      <Login />

    </div>

  )
}

export default Landing;
