import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchPotlucks, deletePotluck } from '../actions/potluckActions'
import { deleteRecipe } from '../actions/recipeActions'

// this is where all my actions go

import Potluck from '../components/Potluck'
import PotluckForm from '../components/PotluckForm'


class PotluckList extends Component {
  constructor(props){
    super(props);
    this.state = {
      sortedPotlucks: [],
    };
  }

  componentWillMount() {
    this.props.fetchPotlucks()
  }

  handleClick = () => {
    let { potlucks } = this.props
    this.setState(state =>({
      sortedPotlucks: potlucks.sort(function(a,b){
        let textA = a.name.toUpperCase();
        let textB = b.name.toUpperCase();
        return (textA < textB) ? -1: (textA > textB) ? 1: 0;
      })
      })
  )}

render(){

  const { potlucks } = this.props
  let { sortedPotlucks } = this.state.sortedPotlucks

  return (
    <div>

      <h2>Upcoming Potlucks:</h2>
      <button onClick={this.handleClick}> Sort Alphabetically </button>
      { potlucks.map(potluck =>
        <Potluck key={ potluck.id } potluck={ potluck }
        deletePotluck={ this.props.deletePotluck}
        deleteRecipe={ this.props.deleteRecipe}/>)}
      <h2> Add your potluck event here...</h2>
        <PotluckForm />
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
  deletePotluck,
  deleteRecipe
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PotluckList)
