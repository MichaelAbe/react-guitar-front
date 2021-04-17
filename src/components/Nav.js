import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/guitars'>Guitars</Link></li>
                <li><Link to='/guitars/new'>Add a Guitar</Link></li>
            </ul>
        )
    }
}

export default Nav
