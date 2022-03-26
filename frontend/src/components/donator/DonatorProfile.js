import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { API_ROOT, HEADERS } from '../../constants';

function DonatorProfile() {
  const [donator, setDonator] = useState([]) 
  const token = localStorage.getItem('token')
  
  useEffect( () => {
    const token = localStorage.getItem('token')
    if (token) {
      fetch(`${API_ROOT}/users/${token}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => {
        if (resp.status >= 400) {
          throw new Error("Server responded with an error!")
        }
        return resp.json()
      })
      .then(data => {
        setDonator(data)
      }, 
      err => { 
        console.log('an error has occured')
      })
    }
  }, []) 
  
  return (
    <div id='content'>
      <h1>Hello There, donator.name</h1>
      <span><strong>Your registered email is:</strong> donator.email </span>
      <p class='about'><strong>About You:</strong> donator.about </p>

      <p><Link to=''>Edit your profile</Link></p>

      <activity>
        <h3>Your Recent Activity</h3>
        <p>You have no recent activity to display</p>
      </activity>
    </div>
  )
}

export default DonatorProfile;
