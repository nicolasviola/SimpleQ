import initialState from './initialState'
import {
  GET_POLLS,
} from './const'

const reducer = (state = initialState, action) => {

  if (action.type === `${GET_POLLS}_FULFILLED`) {
    return {
      ...state,
      pollList: action.payload.data,
    }
  }

  return state
}

export default reducer
