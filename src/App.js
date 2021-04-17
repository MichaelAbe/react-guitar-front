import react, { Component} from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer';
// import './App.css';
import HelloWorld from './components/HelloWorld';
import Nav from './components/Nav'


class App extends Component {
  
  render() {
    return (
      <Router>
        <Nav /> 
        <Switch>

        </Switch>
        <Footer />
      </Router>
    );

  }
}

export default App;
