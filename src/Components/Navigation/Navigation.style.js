import { StyleSheet, Dimensions } from 'react-native'

// const { height, width } = Dimensions.get('window')

export default StyleSheet.create({

  container: {
    height: '100%',
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  textTitlePrincipal: {
    fontSize: 20,
    color: 'white',
    marginLeft: 30,
  },

  textTitle: {
    fontSize: 20,
    color: '#4C5380',
    marginLeft: 20,
  },

  headerStyleNavOpt: {
    backgroundColor: '#C2CCD8',
    height: 50,
  },

  labelStyleMainMenu: {
    fontSize: 20,
    color: 'white',
    height: 20,
    display: 'flex',
    justifyContent: 'center',
  },

  headerStyleStNav: {
    backgroundColor: '#2E368B',
    height: 55,
  },

  labelStyleNavigation: {
    fontSize: 20,
    color: 'black',
    height: 20,
    display: 'flex',
    justifyContent: 'center',
  },

})
