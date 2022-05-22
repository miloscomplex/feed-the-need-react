import React, { useState, useEffect, useContext  } from 'react';
import { Link } from 'react-router-dom'
import { FETCH } from '../API'
import { useHistory } from "react-router-dom"
import { API_ROOT, HEADERS } from '../../constants'


function User(props) { 

    // const userContext = React.useContext(userContext);
    const history = useHistory()
    const [user, setUser] = useState([])
    const token = localStorage.token
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

    const newUsersArr = newUsers.map( user =>
        <div key={user.id} className='user__dashboard-new-users-div'>
            <p className='user__dashboard-new-users-p'>{user.name}</p>
        </div>
    )

    const itemsArr = itemsList.map( item => 
        <div key={item.id} className='user__dashboard__items-div'>
           <p className='user__dashboard__items-p'>Name: {item.name}</p>
           <p className='user__dashboard__items-p'>Qty: {item.qty}</p>
           <div className='user__dashboard__items-img'></div>

        </div>
    )

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
          fetch(`${API_ROOT}/auto_login`, {
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
            setUser(data)
          }, 
          err => { 
            console.log('an error has occured')
          })
        }
        console.log('Props= ', props.userProps);

        FETCH(`items/`, setItemsList);
        FETCH(`users/`, setNewUsers);
    },[])

    return (
        <div id='content' className='user space-above'>
            <h2>Your Dashboard</h2>
            <div className='user__dashboard'>
            <ul>
                {userArr()}
            </ul>
                <div className='user__dashboard-donations'>
                        <h3>Donations</h3>
                        <li>No Donations listing at this time.</li>
                    <ul>
                        <Link to={`/users/${props.match.params.id}/add-item`} >Donate An Item</Link>
                        <a href='/needy'>See Needy</a>
                    </ul>

                </div>
                <div className='user__dashboard-users'>
                    <ul> 
                        <li>
                            <h3>New Users</h3>
                           {newUsersArr}
                        </li>
                    </ul>
                </div>
                <div className='user__dashboard__items-wrapper spaceabove'>
                    <h3 className='user__dashboard__items-h3'>Current Items</h3>
                        <div className='user__dashboard__items'> 
                            {itemsArr ? itemsArr : ''}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default User