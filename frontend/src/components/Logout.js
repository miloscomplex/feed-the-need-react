import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { FETCH } from './API'


function Logout(props) {

    const setUser = props.setUserProps

    useEffect(() => {
        localStorage.removeItem('token')
        setUser('')
        FETCH(`/logout`, console.log)
    }, [])

    return (
        <div id='content' className='logout'>
            <h1>You have successfully logged out</h1>
            <p>Return to Home</p>
            <Link to='/'>Click Here</Link> 
        </div>
    )
}

export default Logout;