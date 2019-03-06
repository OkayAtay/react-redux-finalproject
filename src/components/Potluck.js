import React from 'react'
import Recipe from './Recipe'
import RecipeForm from './RecipeForm'
import LikeButton from './LikeButton'

const Potluck = ({ potluck: {id, name, date, time, location, description, recipes }, deletePotluck, deleteRecipe }) =>
  <div>
    <p>Name: { name }</p>
    <p>Time: { time }</p>
    <p>Date: { date }</p>
    <p>Location:{ location }</p>
    <p>Deets: { description }</p><br />
    <LikeButton/><br></br>
    <button onClick={ () => deletePotluck(id) }>Delete Potluck</button><br></br>
      { recipes.map(recipe => <Recipe key={ recipe.id} recipe={ recipe } potluckId={ id } deleteRecipe={ deleteRecipe }/>) }
    <RecipeForm potluckId={ id }/>
  </div>

export default Potluck
