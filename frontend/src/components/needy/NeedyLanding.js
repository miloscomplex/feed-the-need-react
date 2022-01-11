import { Link } from 'react-router-dom'
import HeaderNeedy from '../../UI/HeaderNeedy'

function NeedyLanding() {
  return (
    <div id='wrapper'>
      
      <div id='content' className='needy-landing'>
        <div className='needy-landing__bio'>
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
          <Link to='add-item' className='needy-landing__bio-btn'>Edit your profile</Link>
        </div>

        <div className='needy-landing__needs-div'>
          <h2 className='space-above'>Your List Of Needs</h2>
          <ul className='needy-landing__needs-div__ul'>
            <li>List of needs goes here</li>
            <li>List of needs goes here</li>
            <li>List of needs goes here</li>
            <li>List of needs goes here</li>
            <li>List of needs goes here</li>
            <li>List of needs goes here</li>
          </ul>
          <Link to='add-item' className='needy-landing__btn'>Edit Your List of Needs</Link>
        </div>

        <activity className='space-above'>
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
    </div>
  )
}

export default NeedyLanding;
