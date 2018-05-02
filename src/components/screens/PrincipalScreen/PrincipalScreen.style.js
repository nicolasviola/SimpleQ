// Dependencies:
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },

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
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: 45,
    height: 45,
  },

  textContainer: {
    width: '55%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: '100%',
  },

  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#009ED9',
  },

  textDescriptionContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textDescription: {
    fontSize: 12,
    color: '#AC9FA1',
  },

  longImg: {
    width: 75,
    height: 30,
  },

  modalContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    height: '45%',
    width: '80%',
    // backgroundColor: '#FBFBFB',
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: '#E2E2E4',
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  modalHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 20,
  },

  modalImageContainer: {
    marginLeft: 5,
    width: 45,
    height: 45,
  },

  modalImage:{
    width: 45,
    height: 45,
  },

  modalTextContainer:{
    width: '80%',
  },

  modalTextTitle:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#009ED9',
  },

  modalTextDescriptionContainer:{
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },

  modalTextDescription:{
    fontSize: 12,
    color: '#AC9FA1',
  },

  modalBody: {
    width: '60%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  modalImageLarge: {
    width: 70,
    height: 70,
  },

  modalFooter: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15,
    paddingBottom: 10,
  },

  modalFooterText: {
    paddingTop: 15,
    paddingLeft: 15,
    fontSize: 12,
    color: '#D6E0AA',
  }

})
