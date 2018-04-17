const {

  API_URL,

} = process.env


// Set defaults
const env = {

  // App settings
  API_URL: API_URL || 'https://f4717967-7fdd-4b5b-bb08-93663034f4e7.mock.pstmn.io',

}

// export const isBrowser = (): boolean => Boolean(
//   typeof window !== 'undefined' && window.document
// )

const getEnv = () => {

  return env

}


const dynamicEnv = getEnv()


export default dynamicEnv
