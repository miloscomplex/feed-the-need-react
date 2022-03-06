import './sass/App.scss';
import { API_ROOT, HEADERS } from './constants'
import React, { useState, useEffect } from 'react';
import Nav from './UI/Nav';
import Header from './UI/Header'
import Footer from './UI/Footer'
import Landing from './components/Landing'
import NeedyLanding from './components/needy/NeedyLanding'
import DonatorLanding from './components/donator/DonatorLanding'
import DisplayNeedyProfile from './components/donator/DisplayNeedyProfile'
import AddItem from './components/needy/AddItem'
import DonatorProfile from './components/donator/DonatorProfile'
import SignUp from './components/SignUp'
import Login from './components/Login'
import DonatorSignUp from './components/donator/DonatorSignUp'
import NeedySignUp from './components/needy/NeedySignUp'
import Items from './components/items/Items'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App(props) {

  const [user, setUser] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if (token) {
      fetch(`${API_ROOT}/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        console.log('this is useEffect ', data)
        setUser(data)
      })
    }
  }, [])

  const setUserState = (newUser) => {
    setUser(newUser)
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
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/needy' component={NeedyLanding} />
          <Route exact path='/donator/profile' component={DonatorProfile} />
          <Route exact path='/donator' component={DonatorLanding} />
          <Route exact path='/donator/needy-profile' component={DisplayNeedyProfile} />
          <Route exact path='/needy/add-item' component={AddItem} />
          <Route exact path='/sign-up' component={DonatorSignUp} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/items' component={Items} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
