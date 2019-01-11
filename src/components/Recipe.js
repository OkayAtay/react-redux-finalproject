import React from 'react'

const Recipe = ({ recipe: {id, name, description, category, additional_info }, potluckId, deleteRecipe}) =>
  <div>
      <h3>Dish: { name }</h3>
      <p>Description: { description }</p>
      <p>Category: { category }</p>
      <p>{ additional_info }</p>
    <button onClick={() => deleteRecipe(id, potluckId)}> Delete</button>
  </div>
export default Recipe
