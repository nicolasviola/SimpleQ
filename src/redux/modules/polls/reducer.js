// initialState:
import initialState from './initialState'

// Const:
import {
  GET_POLLS,
} from './const'

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case `${GET_POLLS}_FULFILLED`:
      return {
        ...state,
        pollList: action.payload.data,
      }

    default:
      return state

  }

}

export default reducer
