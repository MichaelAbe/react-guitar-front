import React, { Component} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { getGuitars } from './actions/index'
import Footer from './components/Footer';
// import './App.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import Err from './components/Err'
import About from './components/About'
import Index from './components/Index';
import Form from './components/Form'


class App extends Component {

  componentDidMount() {
    this.props.getGuitars()
  }
  
  render() {
    if (this.props.loading) {
      return (
        <h3>Loading...</h3>
      )
    }

    return (
      <Router>
        <Navbar /> 
        <Switch>
          <Route exact path='/' component= { Home } />
          <Route exact path='/about' component= { About } /> 
          <Route exact path='/guitars' component= { Index } /> 
          <Route exact path='/guitars/new' component= { Form } />
          <Route component= { Err } />
        </Switch>
        <Footer />
      </Router>
    );

  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}


export default connect(mapStateToProps, { getGuitars })(App);
