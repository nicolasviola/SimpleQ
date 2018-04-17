import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/modules'
import thunk from 'redux-thunk'
import promiseMiddleware from "redux-promise-middleware";

const middleware = [
  thunk,
  promiseMiddleware()
]

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export default createStore(rootReducer, applyMiddleware(logger, ...middleware))
