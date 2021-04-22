import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const currentYr = new Date().getFullYear()

class Footer extends Component {


    render() {
        return (
            <div className='footer'>
               
               <p>© { currentYr } G.A.S. app</p>
               <ul>Contact Us: www.contactemail@email.com</ul>
               <ul>555.555.5555</ul>
               <div className='links'>
               <li><Link to='/about'>About</Link></li>
               </div>
            </div>
        )
    }
}

export default Footer
