import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGuitar } from '../actions/index'

class Form extends Component {


    state = {
        make: '', 
        model: '', 
        sn: '', 
        price: '', 
        finish: '', 
        notes: '', 
        year: ''
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()
        //console.log(this.state)
        this.props.addBGuitar(this.state, this.props.history)
      }

    render() {
        return (
            <div>
                <h3>Add Guitar</h3>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <label htmlFor='make'>Make: </label>
                        <input type='text' id='make' name='make' value={ this.state.make } onChange={ this.handleChange }/>
                    </div>
                    <div>
                        <label htmlFor='model'>Model: </label>
                        <input type='text' id='model' name='model' value={ this.state.model } onChange={ this.handleChange }/>
                    </div>
                    <div>
                        <label htmlFor='year'>Year: </label>
                        <input type='text' id='year' name='year' value={ this.state.year } onChange={ this.handleChange }/>
                    </div>
                    <div>
                        <label htmlFor='sn'>Serial Number: </label>
                        <input type='text' id='sn' name='sn' value={ this.state.sn } onChange={ this.handleChange }/>
                    </div>
                    <div>
                        <label htmlFor='price'>Cost: </label>
                        <input type='text' id='price' name='price' value={ this.state.price } onChange={ this.handleChange }/>
                    </div>
                    <div>
                        <label htmlFor='finish'>Finish: </label>
                        <input type='text' id='finish' name='finish' value={ this.state.finish } onChange={ this.handleChange }/>
                    </div>
                    <div>
                        <label htmlFor='notes'>Notes: </label>
                        <textarea id='notes' name='notes' value={ this.state.notes } onChange={ this.handleChange }></textarea>
                    </div>
                    <input type='submit' value='Add Guitar' />
                </form>
            </div>
        )
    }
}

export default connect(null, { addGuitar })(Form)
