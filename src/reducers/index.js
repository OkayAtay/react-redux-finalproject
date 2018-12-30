import { combineReducers } from 'redux'

import potlucksReducer from './potlucksReducer'

const rootReducer = combineReducers({
  potlucks: potlucksReducer
})

export default rootReducer
