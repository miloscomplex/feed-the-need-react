import React, { useState, useEffect } from 'react';
import water from '../../images/water.jpg'
import { FETCH } from '../API'

function User(props) { 

    const userProps = props.userProps
    const [user, setUser] = useState([]) 
    console.log('props= ', userProps)

    useEffect(() => {
        FETCH(`/users/${userProps.id}`, setUser)
      },[])

      const userArr = user => {
        return (
        <li key={user.name} className='items__ul-li'>
            <h3>user: {user.name}</h3>
            <p>category: {user.email}</p>
            <p>about: {user.about}</p>
        </li>
        )
    }

    return (
        <div id='content' className='items space-above'>
            <h1>Hello,  </h1>
            <h1>Hello,{userArr(user)} </h1>
   
        </div>
    )
}

export default User