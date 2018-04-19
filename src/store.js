// Dependencies:
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from "redux-promise-middleware"
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

// Components:
import rootReducer from './redux/modules'

const reduxNavigationMiddleware = createReactNavigationReduxMiddleware(
   'root',
   state => state.nav
)

const middleware = [
  thunk,
  promiseMiddleware(),
  reduxNavigationMiddleware
]

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export default createStore(rootReducer, applyMiddleware(logger, ...middleware))
