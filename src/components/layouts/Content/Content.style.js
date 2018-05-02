// Dependencies:
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },

  headerContainer: {
    height: '10%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  header: {
    height: '100%',
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#99BF60'
  },

  buttonStyle: {
    height: '80%',
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imgLogo: {
    width: 130,
    height: 40,
  },

  imgSide: {
    width: 35,
    height: 35,
  },

  textTitle: {
    color: '#009ED9',
    fontWeight: '700',
    fontSize: 20,
    marginTop: 10,
  },

  childrenContainer: {

  },

})
