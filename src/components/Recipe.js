import React from 'react'

const Recipe = ({ recipe: {id, name, description, category, additional_info }, potluckId, deleteRecipe}) =>
  <div>
  <ul>
    <p>Name: { name }</p>
    <p>Description: { description }</p>
    <p>Category: { category }</p>
    <p>{ additional_info }</p>
  </ul>
    <button onClick={() => deleteRecipe(id, potluckId)}> Delete</button>
  </div>
export default Recipe
