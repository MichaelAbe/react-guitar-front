import react, { Component} from 'react'
// import './App.css';
import HelloWorld from './components/HelloWorld';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <h1>This is a test</h1>
      </div>
    );

  }
}

export default App;
