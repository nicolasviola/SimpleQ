// import axios from 'axios'
// import getPollsAPI from '../../../helpers/api/polls'

import {
  GET_POLLS,
} from './const'
import {data} from './mock.js'

export const getPolls = () => (dispatch) =>
    dispatch({
      type: GET_POLLS,
      payload: data,
    })

// export const addToCart = product => {
//   return {
//     type: ADD_TO_CART,
//     product,
//   }
// }
//
// export const deleteCart = product => {
//   return {
//     type: DELETE_CART,
//     product,
//   }
// }
