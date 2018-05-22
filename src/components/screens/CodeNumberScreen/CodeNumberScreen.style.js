// Dependencies:
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

  container: {
    height: '90%',
    width: '100%',
    paddingTop: '10%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  flexContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  imageContainer: {
    marginBottom: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '27%',
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

  buttonTextContainer: {
    marginTop: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#00A0C9',
    fontSize: 16,
    fontWeight: '600',
  }

})
