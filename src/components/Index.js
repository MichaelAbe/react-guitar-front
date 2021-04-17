import React, { Component } from 'react'
import { connect } from 'react-redux'
import Guitar from './Guitar'

class Index extends Component {
    render() {

        const guitars = this.props.guitars.map((g, i) => <Guitar key={i} make={ g.make} model={ g.model } sn={ g.sn } price={ g.price } finish={ g.finish} notes={ g.notes} year={ g.year } />) 

    

        
        return (
            <div>
              { guitars }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       guitars: state.guitars 
    }
}

export default connect(mapStateToProps)(Index)
