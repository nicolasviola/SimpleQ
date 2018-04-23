// Dependencies:
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2E368B',
  },

  formLabelContainer: {
    height: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputStyle: {
    marginTop: 20,
    fontWeight: '300',
    width: '90%',
    marginLeft: '5%',
  },

  buttonContainer: {
    height: '20%',
    width: '98%',
    paddingLeft: '1%',
    paddingRight: '1%',
  },

  buttonStyle: {
    width: '100%',
    borderRadius: 5,
  },

})
