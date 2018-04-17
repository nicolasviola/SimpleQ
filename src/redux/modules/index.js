import { combineReducers } from 'redux'

// Reducers
import polls from './polls/reducer'

const rootReducer = combineReducers({
  polls,
})

export default rootReducer
