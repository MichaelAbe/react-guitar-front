import react, { Component} from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer';
// import './App.css';
import HelloWorld from './components/HelloWorld';
import Nav from './components/Nav'
import Home from './components/Home'
import Err from './components/Err';


class App extends Component {
  
  render() {
    return (
      <Router>
        <Nav /> 
        <Switch>
          <Route exact path='/' component= { Home } />
          <Route component= { Err } />
        </Switch>
        <Footer />
      </Router>
    );

  }
}

export default App;
