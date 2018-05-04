// Dependencies:
import React, { Component } from 'react'

// Components:
import {
  Field
} from 'redux-form'
import Login from '../../layouts/Login/'
import { View, Image, Platform, Linking } from 'react-native'
import TextField from '../../shared/TextField'
import Button from '../../shared/Button'

// Style:
import css from './PhoneNumberScreen.style'

// Assets:
import logoSimpleQ from '../../../../img/logoSimpleQ.png'

class PhoneNumberScreen extends Component {

  // Navigation:
  static navigationOptions = ({navigation}) => ({
    drawerLockMode: 'locked-closed',
    header: null,
  })

  // Deep Linking configuration:
  componentDidMount() {
  if (Platform.OS === 'android') {
    Linking.getInitialURL().then(url => {

      console.log('epaa', url)
      this.navigate(url)

    })
    .catch((err) => {

      console.log(err)

    })
  } else {
      Linking.addEventListener('url', this.handleOpenURL)
    }
  }

  componentWillUnmount() { // C
    Linking.removeEventListener('url', this.handleOpenURL)
  }
  handleOpenURL = (event) => {
    console.log(event.url)
    this.navigate(event.url)
  }
  navigate = (url) => { // E
    const { navigate } = this.props.navigation
    const route = url.replace(/.*?:\/\//g, '')
    // const id = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split('/')[0]

    console.log(routeName)

    if (routeName === 'simpleq.com/encuesta') {


      navigate('PrincipalScreen')

    }

  }
  
  render() {


    return (

      <Login>
        <View style={css.container} >
          <View style={css.flexContainer}>
            <View style={css.imageContainer}>
              <Image
                style={css.image}
                source = {logoSimpleQ}
              />
            </View>
            <View style={css.formButtonContainer}>
              <View style={css.formLabelContainer}>
                <Field
                  component={TextField}
                  name={'telephoneNumber'}
                  clearTextOnFocus = {true}
                  placeholder = "   +549-3415-810394"
                  placeholderTextColor = '#A4A4A4'
                  inputStyle={css.inputStyle}
                />
              </View>
              <Button
                title = 'CONTINUAR'
                dirty = {this.props.dirty}
                onButtonPress = {() => this.props.openCodeNumberScreen()}
              />
            </View>
          </View>
        </View>
      </Login>

    )

  }

}

export default PhoneNumberScreen
