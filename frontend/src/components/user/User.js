import React, { useState, useEffect } from 'react';
import water from '../../images/water.jpg'
import { FETCH } from '../API'

function User(props) { 

    const token = localStorage.token
    const user = props.userProps
    const id = user.id 
    const [itemsList, setItemsList] = useState([])
    const [newUsers, setNewUsers] = useState([])

    const userArr = () => {
        return (
            <li key={user.id} className='items__ul-li'>
                <h3>user: {user.name}</h3>
                <p>email: {user.email}</p>
                <p>user type: {user.user_type}</p>
            </li>
        )
    }

    const itemsArr = itemsList.map( item => 
        <div key={item.id} className='user__dashboard-stats-div'>
           <p className='user__dashboard-stats-div-p'>Name: {item.name}</p>
           <p className='user__dashboard-stats-div-p'>Qty: {item.qty}</p>
           <div className='user__dashboard-stats-img'></div>
        </div>
    )

    const newUsersArr = newUsers.map( user => 
        <li>{user.name}</li>
    )

    useEffect(() => {
        console.log('Props= ', props.userProps);
        FETCH(`users/${props.match.params.id}/items`, setItemsList);
        // FETCH(`users/new-users`, setNewUsers);
    },[])

    return (
        <div id='content' className='user space-above'>
            <h1>Hello,</h1>
            <ul>
                {userArr()}
            </ul>

            <h2>Your Dashboard</h2>
            <div className='user__dashboard'>
                <div className='user__dashboard-donations'>
                        <h3>Donations</h3>
                        <li>No Donations listing at this time.</li>
                    <ul>
                        <a href=''>upload</a>
                        <a href='/needy'>See Needy</a>
                    </ul>

                </div>
                <div className='user__dashboard-users'>
                    <ul> 
                        <li>
                            <h3>New Users</h3>
                           {newUsersArr}
                           blah blah glah
                        </li>
                    </ul>
                </div>
                <div className='user__dashboard-stats spaceabove'>
                    <ul> 
                        <li>
                        <h3>Stats</h3>
                            <ul> 
                                {itemsArr ? itemsArr : ''}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default User