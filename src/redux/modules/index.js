// Dependencies:
import { combineReducers } from 'redux'

// Reducers
import polls from './polls/reducer'
import nav from './navigation/reducer'

const rootReducer = combineReducers({
  polls,
  nav,
})

export default rootReducer
