import React from 'react'

const Recipe = ({ recipe: {id, name, description, category, additional_info }, potluckId, deleteRecipe}) =>

  <li>
    <p>{ name }</p>
    <p>{ description }</p>
    <p>{ category }</p>
    <p>{ additional_info }</p>
  </li>
  
export default Recipe
