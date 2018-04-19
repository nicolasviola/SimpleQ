// Api:
import getPollsAPI from '../../../helpers/api/polls'

// Const:
import {
  GET_POLLS,
} from './const'
// import {data} from './mock.js'

export const getPolls
  = () => (dispatch: Function) =>
    dispatch({
      type: GET_POLLS,
      payload: getPollsAPI(),
    })
