import react, { Component} from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer';
// import './App.css';
import HelloWorld from './components/HelloWorld';
import Nav from './components/Nav'
import Home from './components/Home'
import Err from './components/Err'
import About from './components/About'
import Index from './components/Index';


class App extends Component {
  
  render() {
    return (
      <Router>
        <Nav /> 
        <Switch>
          <Route exact path='/' component= { Home } />
          <Route exact path='/about' component= { About } /> 
          <Route exact path='/guitars' component= { Index } /> 
          <Route component= { Err } />
        </Switch>
        <Footer />
      </Router>
    );

  }
}

export default App;
