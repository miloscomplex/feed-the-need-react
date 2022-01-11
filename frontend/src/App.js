import './sass/App.scss';
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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
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
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/login' component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
