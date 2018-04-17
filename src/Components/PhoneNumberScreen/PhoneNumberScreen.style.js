import { StyleSheet, Dimensions } from 'react-native'

// const { height, width } = Dimensions.get('window')

export default StyleSheet.create({

  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2E368B',
  },

  flexContainer: {
    height: '35%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  formLabelContainer: {
    width: '98%',
    marginBottom: 20,
    marginTop: 20,
  },

  inputStyle: {
    marginTop: 20,
    fontWeight: '700',
  },

  buttonContainer: {
    width: '98%',
    paddingLeft: '1%',
    paddingRight: '1%',
  },

  buttonStyle: {
    width: '100%',
    borderRadius: 5,
  },

  textDescription: {
    width: '80%',
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },

})
