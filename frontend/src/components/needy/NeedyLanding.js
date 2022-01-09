import { Link } from 'react-router-dom'

function NeedyLanding() {
  return (
    <div id='content' className='needy-landing'>
      <div className='needy-landing__bio'>
        <h1 className='needy-landing__h1'>
          Hello Tom
        </h1>
        <div className='needy-landing__div'>
          <div className='needy-landing__bio-img'>
            <div> </div>
          </div>
          <div className='needy-landing__bio-text-div'>

            <div className='text__bio needy-landing__bio-p'>
              <label className='needy-landing__bio-label'>Name</label> <p>Tom White</p>
            </div>

            <div className='text__bio needy-landing__bio-p'>
              <label className='needy-landing__bio-label'>Favorite Color</label>
              <p>Light Blue</p>
            </div>

            <div className='text__bio needy-landing__bio-p'>
              <label className='needy-landing__bio-label'>Home town</label>
              <p>Chicago, IL</p>
            </div>
          </div>
          <div className='needy-landing__bio-div'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere elementum hendrerit. Vivamus orci turpis, auctor nec felis quis, scelerisque viverra ante. Curabitur non massa dapibus, laoreet justo a, mollis odio. Pellentesque ligula dui, molestie et risus eget, dictum ultrices turpis. Quisque sit amet ultrices eros. Suspendisse potenti.</div>
        </div>
        <Link to='' className='needy-landing__bio-btn'>Edit your profile</Link>
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
        <ul className='needy-landing__donated'>
          <li>No Items have been donated</li>
          <li>No Items have been donated</li>
          <li>No Items have been donated</li>
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
