const baseURL = "http://localhost:3001/api/v1"

export const fetchRecipes = potluck => {
  let data = {
    method: 'GET',
    headers: {
      'ACCEPT': 'application/json',
      'Content-Type': 'application/json',
    }
  }

  return dispatch => {
    fetch(`${ baseURL }/potlucks/${potluck.id}/recipes`, data)
      .then(response => response.json())
      .then(recipes =>{
        dispatch({
          type: 'FETCH_RECIPES',
          paylod: recipes
        })
      })
      .catch(() => console.log("Can't access response. Please try again later"))
  }
}


export const createRecipe = (recipe, potluckId) => {
  debugger
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ recipe: recipe })
  }

  return dispatch => {
    fetch(`${ baseURL }/potlucks/${ potluckId }/recipes`, data)
      .then(response => response.json())
      .then(potluck => dispatch({
        type: 'CREATE_RECIPE',
        payload: recipe
      }))
    .catch(() => console.log("Can't access response. Please try again later"))
  }
}

export const deleteRecipe = (id, potluckId) => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`${ baseURL }/potlucks/${ potluckId }/recipes/${ id }`, data)
      .then(response => response.json())
      .then(recipe => dispatch({
        type: 'DELETE_RECIPE',
        payload: recipe
      }))
    .catch(() => console.log("Can't access response. Please try again later"))
  }
}
