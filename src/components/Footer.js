import React, { Component } from 'react'

const currentYr = new Date().getFullYear()

class Footer extends Component {


    render() {
        return (
            <div className='footer'>
               
               <p>© { currentYr } G.A.S. app</p>
               <ul>Contact Us: www.contactemail@email.com</ul>
               <ul>555.555.5555</ul>
            </div>
        )
    }
}

export default Footer
