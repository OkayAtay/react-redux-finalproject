import React from 'react'

const Potluck = ({ potluck: {id, name, date, time, location, description }, deletePotluck }) =>
  <div>
    <h1>{ name }</h1>
    <p>{ time },{ date },{ location },{ description }</p> 
  </div>

export default Potluck
