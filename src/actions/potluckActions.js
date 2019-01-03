//API endpoint here
const baseURL = "http://localhost:3001/api/v1"

export const fetchPotlucks = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }

  return dispatch => {
    fetch(`${ baseURL }/potlucks`, data)
    .then(response => response.json())
    .then(potlucks => dispatch({
      type: 'FETCH_POTLUCKS',
      payload: potlucks
    }))
      .catch(() => console.log("Can't access response. Please try again later"))
  }
}

export const createPotluck = potluck => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ potluck })
  }

  return dispatch => {
    fetch(`${ baseURL }/potlucks`, data)
      .then(response => response.json())
      .then(potluck => dispatch({
        type: 'CREATE_POTLUCK',
        payload: potluck
      }))
      .catch(err=>err)
  }
}

export const deletePotluck = id => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }

  return dispatch => {
    fetch(`${ baseURL }/potlucks/${ id }`, data)
      .then(response => response.json())
      .then(potluck => dispatch({
        type: 'DELETE_POTLUCK',
        payload: potluck
      }))
      .catch(err => err)
  }
}
