import './sass/App.scss';
import { API_ROOT, HEADERS } from './constants'
import React, { useState, useEffect, useContext } from 'react';
import Header from './UI/Header'
import Footer from './UI/Footer'
import Landing from './components/Landing'
import Needy from './components/needy/Needy'
import Donators from './components/donator/Donators';
import DisplayNeedyProfile from './components/donator/DisplayNeedyProfile'
import AddItem from './components/donator/AddItem'
import DonatorProfile from './components/donator/DonatorProfile'
import Login from './components/Login'
import Logout from './components/Logout'
import DonatorSignUp from './components/donator/DonatorSignUp'
import Items from './components/items/Items'
import Item from './components/items/item'
import FourOFour from './components/FourOFour'
import User from './components/user/User'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const UserContext = React.createContext();

function App(props) {
  
  const history = useHistory()
  const [user,setUser] = useState({})
  const token  = localStorage.getItem('token')

  const handleAuthClick = () => {
    const token = localStorage.getItem('token')
    fetch(`${API_ROOT}/user_is_authed`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(resp => {
      if (resp.status >= 400) {
        throw new Error("Server responded with an error!")
      }
      return resp.json()
    })
    .then(data => {
       return setUser(data)
    }, 
    err => {
      console.log('an error has occured')
      history.push('/login')
    })
  }


  useEffect( () => {
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
  }, [])

  const handleLogout = () => {
    setUser({})
    localStorage.removeItem('token')
  }

  return (
    <UserContext.Provider value={user}>
      <Router basename='feed-the-need'>
        <div className='App'>
              <Header userProps={user} />
            
              <Switch>
                <Route exact path='/' render={(props) => <Landing setUserProps={setUser} userProps={user} {...props} />} />
                <Route exact path='/needy' render={(props) => <Needy userProps={user} {...props} />} />
                <Route exact path='/donators' render={(props) => <Donators userProps={user} {...props} />} />
                <Route exact path='/donator/profile' render={(props) => <DonatorProfile userProps={user} {...props} />} />
                <Route exact path='/donator/needy-profile' render={(props) => <DisplayNeedyProfile userProps={user} {...props} />} />
                <Route exact path='/users/:id' render={routerProps => <User setUserProps={setUser} userProps={user} {...routerProps} />} />
                <Route exact path='/users/:id/add-item' render={(props) => <AddItem userProps={user} {...props} />} />
                <Route exact path='/sign-up' render={(props) => <DonatorSignUp userProps={user} {...props} />} />
                <Route exact path='/login' render={(props) => <Login setUserProps={setUser} userProps={user} {...props} />} />
                <Route exact path='/logout' user={user} setUser={setUser}render={(props) => <Logout setUserProps={setUser} {...props} />} />
                <Route exact path='/items' render={(props) => <Items userProps={user} {...props} />} />
                <Route exact path='/items/:id' render={routerProps => <Item userProps={user} {...routerProps} />} />
                <Route path='*' render={routerProps => <FourOFour {...routerProps}  />} />
              </Switch>

              <Footer />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
