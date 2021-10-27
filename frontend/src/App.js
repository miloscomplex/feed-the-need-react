import './css/App.css';
import Nav from './UI/Nav';
import Footer from './UI/Footer'
import Landing from './components/Landing'
import NeedyLanding from './components/NeedyLanding'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router basename='feed-the-need'>
      <div className='App'>
        <Nav />
        <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/needy' component={NeedyLanding} />
        <Footer />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
