const initialState = {
  current: {},
  all: []
}

export default function potlucksReducer(state = initialState, action){
  switch(action.type) {
    case 'FETCH_POTLUCKS':
      return { ...state, all: action.payload }
    case 'CREATE_POTLUCK':
      return { ...state, all: action.payload }
    default: return state 
  }
}
