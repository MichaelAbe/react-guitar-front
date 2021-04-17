import React, { Component } from 'react'

class Guitar extends Component {
    render() {
        const { make, model, sn, price, finish, notes, year } = this.props
        //  "make"
        //  "model"
        //  "sn"
        //  "price"
        //  "finish"
        //  "notes"
        //  "year"
        return (
            <div>
                <h3>{ year }-{ make }' '{ model }</h3>
                <h4>Serial Number: { sn }</h4>
                <h4>Finish: { finish }</h4>
                <h4>Price Paid: { price }</h4>
                <h4>Notes: { notes }</h4>
            </div>
        )
    }
}



export default Guitar


