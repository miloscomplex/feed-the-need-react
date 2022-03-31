import './sass/App.scss';
import ReactDOM from 'react-dom';
import { API_ROOT, HEADERS } from './constants'
import React, { useState, useEffect, useCallback } from 'react';
import Header from './UI/Header'
import Footer from './UI/Footer'
import Landing from './components/Landing'
import NeedyLanding from './components/needy/NeedyLanding'
import Needy from './components/needy/Needy'
import Donators from './components/donator/Donators';
import DonatorLanding from './components/donator/DonatorLanding'
import DisplayNeedyProfile from './components/donator/DisplayNeedyProfile'
import AddItem from './components/needy/AddItem'
import DonatorProfile from './components/donator/DonatorProfile'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Logout from './components/Logout'
import DonatorSignUp from './components/donator/DonatorSignUp'
import NeedySignUp from './components/needy/NeedySignUp'
import Items from './components/items/Items'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'



function App(props) {
  
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
        throw new Error("Server rsponded with an error!")
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

  const setUserState = (newUser) => {
    // setUser(newUser)
    console.log('setUserState called')
  }

  const handleLogout = () => {
    setUser({})
    localStorage.removeItem('token')
  }

  return (
    <Router basename='feed-the-need'>
      <div className='App'>
            <Header />
            <Link to="#" onClick={ ev => handleAuthClick(ev) }>/Access Auth Route</Link>
            <Switch>
              <Route exact path='/' render={(props) => <Landing userProps={user} {...props} />} />
              <Route exact path='/needy' render={(props) => <Needy userProps={user} {...props} />} />
              <Route exact path='/donators' render={(props) => <Donators userProps={user} {...props} />} />
              <Route exact path='/donator/profile' render={(props) => <DonatorProfile userProps={user} {...props} />} />
              <Route exact path='/donator/needy-profile' render={(props) => <DisplayNeedyProfile userProps={user} {...props} />} />
              <Route exact path='/needy/:user_id/add-item' render={(props) => <AddItem userProps={user} {...props} />} />
              <Route exact path='/sign-up' render={(props) => <DonatorSignUp userProps={user} {...props} />} />
              <Route exact path='/login' render={(props) => <Login userProps={user} {...props} />} />
              <Route exact path='/logout' user={user} setUser={setUser}render={(props) => <Logout userProps={user} {...props} />} />
              <Route exact path='/items' render={(props) => <Items userProps={user} {...props} />} />
            </Switch>
            <Footer />
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state,
  }
}

export default connect(mapStateToProps)(App);
