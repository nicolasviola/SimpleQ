import initialState from './initialState'
import {
  GET_POLLS,
} from './const'

const reducer = (state = initialState, action) => {
  if (action.type === GET_POLLS) {
    return {
      ...state,
      pollList: action.payload,
      // productList: state.productList.concat(action.products),
    }
  }
  return state
}

export default reducer
