import React, { Component } from 'react'



class Guitar extends Component {



    render() {

    
        const { make, model, sn, price, finish, notes, year, likes } = this.props
 
        return (
            <div className='standard'>
                <h3 className='top'>{ year }- { make } - { model }</h3>
                <button>likes #</button>
                <div className='stats'>
                    <h4> Serial Number: { sn }</h4>
                    <h4> Finish: { finish }</h4>
                    <h4> Price Paid: { price }</h4>
                    <h4> Notes: { notes }</h4>
                </div>
                
            </div>
        )
    }
}



export default Guitar


