// Dependencies:
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

// Reducers
import polls from './polls/reducer'
import nav from './navigation/reducer'

const rootReducer = combineReducers({
  polls,
  nav,
  form,
})

export default rootReducer
