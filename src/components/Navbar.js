import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (

            <nav className='navbar'>
                <h1>Guitar . Accelerated . Storage . application</h1>
                <div className='links'>
                <a><Link to='/'>Home</Link></a>
                <a><Link to='/about'>About</Link></a>
                <a><Link to='/guitars'>Guitars</Link></a>
                <a><Link to='/guitars/new'>Add a Guitar</Link></a>
                </div>
            </nav>
        )
    }
}

export default Navbar
