import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (

            <nav className='navbar'>
                <h1><Link to='/'>Guitar . Accelerated . Storage . application</Link></h1>
                <div className='links'>
                <li><Link to='/guitars'>My Guitars</Link></li>
                <li><Link to='/guitars/new'>Add a Guitar</Link></li>
                </div>
            </nav>

        )
    }
}

export default Navbar
