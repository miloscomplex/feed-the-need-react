import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='App' id='content'>
      <h1>Welcome to Feed The Need</h1>
      <p class="emphasis">We, as a society, are more and more becoming cashless and dependent upon electronic transactions. A shortfall of this situation is that people in need are deprived; more frequently, people no longer have those couple of dollars or loose change in their purse or pocket to help them out.
      </p>
      <subhead>Do you need help?</subhead>
      <Link to=''>Sign-up</Link><br />
      <subhead>Do you want to help?</subhead>
      <Link to=''>Sign-up</Link><br />

      <subhead>Already have an account? Login Below:</subhead>
      <Link to=''>Login</Link><br />
    </div>

  )
}

export default Landing;
