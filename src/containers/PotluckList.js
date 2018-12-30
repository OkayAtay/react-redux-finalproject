import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchPotlucks, deletePotluck } from '../actions/potluckActions'

// this is where all my actions go

import Potluck from '../components/Potluck'
import PotluckForm from '../components/PotluckForm'


class PotluckList extends Component {

  componentWillMount() {
    this.props.fetchPotlucks()
  }

  render(){

    const { potlucks } = this.props

    return (
      <div>
        { potlucks.map(potluck => <Potluck key={ potluck.id } potluck={ potluck }/>)}
        <h2> Add your potluck event here </h2>
        <PotluckForm/>
      </div>
    )
  }
}

      // this is where my mounted component actions go

const mapStateToProps = state => {
  return {
    potlucks: state.potlucks.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPotlucks,
  deletePotluck
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PotluckList)
