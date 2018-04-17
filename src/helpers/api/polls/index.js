import { get } from '../'
import env from '../../../../config/env'

const { API_URL } = env

const getPolls = () => (
  get(`${API_URL}/polls`)
    .then()
)

export default getPolls
