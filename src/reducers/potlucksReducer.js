const initialState = {
  current: {},
  all: []
}

export default function potlucksReducer(state = initialState, action){
  switch(action.type) {
    case 'FETCH_POTLUCKS':
      return { ...state, all: action.payload }
    case 'CREATE_POTLUCK':
      return { ...state, all: [...state.all, action.payload] }
    case 'DELETE_POTLUCK':
      return {...state, all: state.all.filter(potluck => potluck.id !== action.payload.id) }
    case 'CREATE_RECIPE':
      let all = [...state.all ]
      let idx = all.findIndex(potluck => potluck.id ===  action.payload.potluckId)
      all[idx].recipes.push(action.payload)

      return { ...state, all }
    case 'DELETE_RECIPE':
      all = [ ...state.all ]
      idx = all.findIndex(potluck => potluck.id === action.payload.potluckId)
      all[idx].recipes = all[idx].recipes.filter(recipe => recipe.id !== action.payload.id)

      return { ...state, all }
    default: return state
  }
}
