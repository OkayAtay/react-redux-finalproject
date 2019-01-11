import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createRecipe } from '../actions/recipeActions'
import { fetchRecipes } from '../actions/recipeActions'

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

    updatePotluckRecipes = () => {
      const { potluckId } = this.props
      debugger
      var newRecipe = {
        id: this.props.recipe.id,
        name: this.props.recipe.name,
        description: this.props.recipe.description,
        category: this.props.recipe.category,
        additional_info: this.props.recipe.additiona_info
      };

      this.props.createRecipe(newRecipe, potluckId)
    }

    onSubmit(e) {
      e.preventDefault()
      debugger
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
          <div>
            <h2>Add A Recipe</h2>
                  <form onSubmit={ this.onSubmit }>
                    <input name="name" placeholder="Name" value={ name } onChange={ this.onChange }/><br></br>
                    <input name="description" placeholder="Description" value={ description } onChange={ this.onChange }/><br></br>
                    <input name="category" placeholder="Category" value={ category } onChange={ this.onChange }/><br></br>
                    <input name="additional_info" placeholder="Additional Info" value={ additional_info } onChange={ this.onChange }/><br></br>
                    <button type="submit"> Create New Recipe </button>
                  </form>
            </div>
    )
    }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({
    createRecipe,
    fetchRecipes
  }, dispatch)

export default connect(null, mapDispatchToProps)(RecipeForm)
