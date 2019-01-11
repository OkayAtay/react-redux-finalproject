import React from 'react'
import Recipe from './Recipe'
import RecipeForm from './RecipeForm'

const Potluck = ({ potluck: {id, name, date, time, location, description, recipes }, deletePotluck, deleteRecipe }) =>
  <div>
    <h2>Name: { name }</h2>
    <p>Time: { time }</p>
    <p>Date: { date }</p>
    <p>Location:{ location }</p>
    <p>Deets: { description }</p><br></br>
    <button onClick={ () => deletePotluck(id) }>Delete Potluck</button>
      { recipes.map(recipe => <Recipe key={ recipe.id} recipe={ recipe } potluckId={ id } deleteRecipe={ deleteRecipe }/>) }

    <p> Add a Recipe</p>
    <RecipeForm potluckId={ id }/>
  </div>

export default Potluck
