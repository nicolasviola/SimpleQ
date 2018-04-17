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

  formLabelContainer: {
    width: '98%',
    marginBottom: 20,
    marginTop: 20,
  },

  inputStyle: {
    marginTop: 20,
    color: 'white',
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

  text: {
    fontSize: 20,
  },
  
})
