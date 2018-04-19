// Dependencies:
import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

// Styles:
import css from './PollsScreen.style'

class PollsScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Encuestas',
    headerTitle: '',
  })

  render() {

    return (

      <View style={css.container}>
        <Text>
          ENCUESTAS
        </Text>
      </View>

    )

  }

}

export default PollsScreen
