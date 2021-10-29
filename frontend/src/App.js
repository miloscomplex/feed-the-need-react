import './css/App.css';
import Nav from './UI/Nav';
import Footer from './UI/Footer'
import Landing from './components/Landing'
import NeedyLanding from './components/NeedyLanding'
import DonatorLanding from './components/DonatorLanding'
import NeedyProfile from './components/NeedyProfile'
import DonatorProfile from './components/DonatorProfile'
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
          <Route exact path='/donator/needy-profile' component={NeedyProfile} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
