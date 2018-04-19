// Dependencies:
import Axios from 'axios'
import env from '../../../config/env'

const getClient = () =>  new Promise((resolve, reject) => {

  // Defaults
  const config = {
    baseURL: env.API_URL,
    timeout: 15000,
  }

  resolve(Axios.create(config))

})

const _parseError = (error) => {

  if (error && error.response) {

    return {
      statusCode: error.response.status,
      data: error.response.data,
      error: true,
    }

  }
  else if (error instanceof Error) {

    return error.message

  }

  return `ERROR: ${error.toString()}`

}

const _parseResponse = (response) =>

  ({
    statusCode: response.status,
    data: response.data,
  })


// GET request factories
export const get = (endpoint, opts) => getClient()
  .then(product => product.get(endpoint, opts)
    .then(response =>

      _parseResponse(response)

    )
    .catch(error =>

      Promise.reject(_parseError(error))

    ))
