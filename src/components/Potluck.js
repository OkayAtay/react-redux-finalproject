import React from 'react'
import Recipe from './Recipe'
import RecipeForm from './RecipeForm'

const Potluck = ({ potluck: {id, name, date, time, location, description, recipes }, deletePotluck, deleteRecipe }) =>
  <div>
    <h3>{ name }</h3>
    <p>{ time },{ date },{ location },{ description }<br></br>
    <button onClick={ () => deletePotluck(id) }>Delete Potluck</button></p>
    <ul>
      { recipes.map(recipe => <Recipe key={ recipe.id} recipe={ recipe } potluckId={ id } deleteRecipe={ deleteRecipe }/>) }
    </ul>
    <p> What delicious things do you have in store?</p>
    <RecipeForm potluckId={ id }/>
  </div>

export default Potluck
