// Dependencies:
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

  textTitle: {
    fontSize: 20,
    color: '#4C5380',
    marginLeft: 20,
  },

  headerStyle: {
    backgroundColor: '#C2CCD8',
  },

  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2E368B',
  },

  formLabelContainer: {
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
    width: '98%',
    paddingLeft: '1%',
    paddingRight: '1%',
  },

  buttonStyle: {
    width: '100%',
    borderRadius: 5,
  },

})