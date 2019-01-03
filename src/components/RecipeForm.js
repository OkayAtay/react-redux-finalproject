import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createRecipe } from '../actions/recipeActions'

class RecipeForm extends Component {
  constructor(){
    super()

    this.state = {
      name: "",
      description: "",
      category: "",
      additional_info: ""
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
    onChange(e) {
      const field = e.target.name
      let state = this.state

      state[field] = e.target.value
      this.setState(state)
    }

    onSubmit(e) {
      e.preventDefault()

      const { potluckId } = this.props
      this.props.createRecipe(this.state, potluckId)
      this.setState({
        name: "",
        description: "",
        category: "",
        additional_info: ""
      })
    }

    render() {
      const { name, description, category, additional_info } = this.state

      return (
        <form onSubmit={ this.onSubmit }>
          <input name="name" placeholder="Name" value={ name } onChange={ this.onChange }/><br></br>
          <input name="description" placeholder="Description" value={ description } onChange={ this.onChange }/><br></br>
          <input name="category" placeholder="Category" value={ category } onChange={ this.onChange }/><br></br>
          <input name="additional_info" placeholder="Additional Info" value={ additional_info } onChange={ this.onChange }/><br></br>
          <button type="submit"> Create New Recipe </button>
        </form>
      )
    }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({
    createRecipe
  }, dispatch)

export default connect(null, mapDispatchToProps)(RecipeForm)
