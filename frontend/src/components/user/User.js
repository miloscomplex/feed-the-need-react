import React, { useState, useEffect } from 'react';
import water from '../../images/water.jpg'
import { FETCH } from '../API'

function User(props) { 

    const userProps = props.userProps
    const [user, setUser] = useState([]) 

    useEffect(() => {
        FETCH(`/users/${userProps.id}`, setUser)
      },[])

    const userArr = userInfo => {
        return (
        <li key={userInfo.id} className='items__ul-li'>
            <h3>userInfo: {userInfo.name}</h3>
            <p>email: {userInfo.email}</p>
        </li>
        )
    }

    return (
        <div id='content' className='user space-above'>
            <h1>Hello,</h1>
            <ul>{userArr(userProps)}</ul>
            <div className='user__dashboard'>
                <h2>Your Dashboard</h2>
                <div className='user__dashboard-donations space-above'>
                    <h3>Donations</h3>
                    <ul>
                        <li>Donations listing goes here</li>
                    </ul>
                </div>
                <div className='user__dashboard-users'>
                    <h3>New Users</h3>
                    <ul> 
                        <li>Users Dashboard goes here</li>
                    </ul>
                </div>
                <div className='user__dashboard-stats spaceabove'>
                    <h3>Stats</h3>
                    <ul> 
                        <li>Stats will go here</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default User