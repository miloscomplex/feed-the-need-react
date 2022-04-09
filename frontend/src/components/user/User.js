import React, { useState, useEffect } from 'react';
import water from '../../images/water.jpg'
import { FETCH } from '../API'

function User(props) { 

    const token = localStorage.token
    const userProps = props.userProps
    
    
    const userArr = user => {
        console.log('user= ', user)
        if (!user) {
            return (
                <li>Sorry nothing to see here</li>
            )
        } else {
            return (
                <li key={user.id} className='items__ul-li'>
                    <h3>user: {user.name}</h3>
                    <p>email: {user.email}</p>
                </li>
            )
        }
    }

    return (
        <div id='content' className='user space-above'>
            <h1>Hello,</h1>
            <ul>
                {userArr(userProps)}
            </ul>

            <h2>Your Dashboard</h2>
            <div className='user__dashboard'>
                <div className='user__dashboard-donations'>
                    <ul>
                        <h3>Donations</h3>
                        <li>No Donations listing at this time.</li>
                    </ul>
                </div>
                <div className='user__dashboard-users'>
                    <ul> 
                        <li>
                            <h3>New Users</h3>
                            Users Dashboard goes here
                        </li>
                    </ul>
                </div>
                <div className='user__dashboard-stats spaceabove'>
                    <ul> 
                        <li>
                        <h3>Stats</h3>
                            Stats will go here
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default User