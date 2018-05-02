// Dependencies:
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

  container: {
    height: '90%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: '10%',
  },

  flexContainer: {
    height: '60%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  imageContainer: {
    marginBottom: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '30%',
  },

  image: {
    width: '90%',
    height: '100%',
  },

  formButtonContainer: {
    height: '40%',
    width: '100%',
    display: 'flex',
  },

  formLabelContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  inputStyle: {
    fontWeight: '300',
    color: 'black',
    fontSize: 18,
    width: '90%',
    marginLeft: '5%',
    marginBottom: 20,
    borderBottomColor: '#74A935',
    borderBottomWidth: 3,
  },

  buttonContainer: {
    width: '75%',
    marginLeft: '12.5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },

  buttonActivate: {
    width: '100%',
    height: 35,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#91BD41',
  },

  buttonDisabled: {
    width: '100%',
    height: 35,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },

  textButtonActivate: {
    fontSize: 20,
    color: 'white',
  },

  textButtonDisabled: {
    fontSize: 20,
    color: 'black',
  },

})
