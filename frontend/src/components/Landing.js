import { Link } from 'react-router-dom'
import Login from './Login'

function Landing() {
  return (
    <div id='content' className='landing'>
      <p className="text__emphasis, landing__text">We, as a society, are more and more becoming cashless and dependent upon electronic transactions. A shortfall of this situation is that people in need are deprived; more frequently, people no longer have those couple of dollars or loose change in their purse or pocket to help them out.
      </p>
      <div className='landing__cta-wrapper'>
        <div className='landing__cta-div'>
          <div className='subhead landing__cta-div__header'>Do you need help?</div>
          <Link to='/sign-up'>Sign-up</Link>
        </div>
        <div className='landing__cta-div'>
          <div className='subhead landing__cta-div__header'>Do you want to help?</div>
          <Link to='/sign-up'>Sign-up</Link>
        </div>
      </div>
      <Login />

    </div>

  )
}

export default Landing;
