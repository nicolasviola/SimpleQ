import { StyleSheet, Dimensions } from 'react-native'

// const { height, width } = Dimensions.get('window')

export default StyleSheet.create({

  pollContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 70,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },

  imageContainer: {
    width: 64,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: 50,
    height: 50,
  },

  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: '100%',
    width: '60%',
  },

  textTitle: {
    fontSize: 20,
  },

  textDescription: {
    fontSize: 15,
  },
  
})
