import react, { Component} from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import './App.css';
import HelloWorld from './components/HelloWorld';
import Nav from './components/Nav'

class App extends Component {
  
  render() {
    return (
      <Router>
        <Nav /> 
      <div className="App">
        <HelloWorld />
        <h1>This is a test</h1>
      </div>
      </Router>
    );

  }
}

export default App;
