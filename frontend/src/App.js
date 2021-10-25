import './css/App.css';
import Nav from './UI/Nav';
import Footer from './UI/Footer'
import Landing from './components/Landing'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router basename='feed-the-need'>
      <div className='App'>
        <Nav />
        <Landing />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
