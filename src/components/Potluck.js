import React from 'react'
import Recipe from './Recipe'
import RecipeForm from './RecipeForm'
import LikeButton from './LikeButton'

const Potluck = ({ potluck: {id, name, date, time, location, description, recipes }, deletePotluck, deleteRecipe }) =>
  <div>
    <p>Time: { time }</p>
    <p>Date: { date }</p>
    <p>Location:{ location }</p>
    <p>Deets: { description }</p><br></br>
    <LikeButton/><br></br>    
    <button onClick={ () => deletePotluck(id) }>Delete Potluck</button>
      { recipes.map(recipe => <Recipe key={ recipe.id} recipe={ recipe } potluckId={ id } deleteRecipe={ deleteRecipe }/>) }
    <p> Add a Recipe</p>
    <RecipeForm potluckId={ id }/>
  </div>

export default Potluck
