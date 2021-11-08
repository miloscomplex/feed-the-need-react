import './sass/App.scss';
import Nav from './UI/Nav';
import Footer from './UI/Footer'
import Landing from './components/Landing'
import NeedyLanding from './components/needy/NeedyLanding'
import DonatorLanding from './components/donator/DonatorLanding'
import DisplayNeedyProfile from './components/donator/DisplayNeedyProfile'
import DonatorProfile from './components/donator/DonatorProfile'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router basename='feed-the-need'>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/needy' component={NeedyLanding} />
          <Route exact path='/donator/profile' component={DonatorProfile} />
          <Route exact path='/donator' component={DonatorLanding} />
          <Route exact path='/donator/needy-profile' component={DisplayNeedyProfile} />
          <Route exact path='/sign-up' component={SignUp} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
