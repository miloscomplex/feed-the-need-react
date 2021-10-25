import './css/App.css';
import Nav from './UI/Nav';
import Login from './components/Login'
import Footer from './UI/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router basename='feed-the-need'>
      <div className="App">
        <Nav />
        <h1>New Content Here</h1>
        <Login />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
