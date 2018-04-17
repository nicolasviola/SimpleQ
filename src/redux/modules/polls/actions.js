import getPollsAPI from '../../../helpers/api/polls'

import {
  GET_POLLS,
} from './const'
// import {data} from './mock.js'

export const getPolls
  = (): Function => (dispatch: Function) =>
    dispatch({
      type: GET_POLLS,
      payload: getPollsAPI(),
    })
