import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Guitar extends Component {
    render() {

        

        const handleDelete = e => {
            fetch("http://localhost:3001/guitars/" + `${this.props.id.toString()}`, {
              method: "DELETE"
              })
             window.location.reload()
          }

        const { make, model, sn, price, finish, notes, year } = this.props
        //  "make"
        //  "model"
        //  "sn"
        //  "price"
        //  "finish"
        //  "notes"
        //  "year"
        return (
            <div className='standard'>
                <h3>{ year }-{ make }' '{ model }</h3>
                <p className='stats'>

                <h4> Serial Number: { sn }</h4>
                <h4> Finish: { finish }</h4>
                <h4> Price Paid: { price }</h4>
                <h4> Notes: { notes }</h4>
                <button onClick={ handleDelete } className='button'>Delete</button>
                </p>
            </div>
        )
    }
}



export default Guitar


