import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (

            <nav className='navbar'>
                <h1>Guitar . Accelerated . Storage . application</h1>
                <div className='links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/guitars'>Guitars</Link></li>
                <li><Link to='/guitars/new'>Add a Guitar</Link></li>
                </div>
            </nav>

        )
    }
}

export default Navbar
