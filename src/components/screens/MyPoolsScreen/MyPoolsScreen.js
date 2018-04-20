// Dependencies:
import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native'

// Style:
import css from './MyPoolsScreen.style'

// Assets:
import imgBall from '../../../../img/soccer-ball.png'
import imgFriends from '../../../../img/friends.png'
import imgFood from '../../../../img/food.png'
import imgBooleanAnswer from '../../../../img/booleanAnswer.png'
import imgDateAnswer from '../../../../img/calendar.png'
import imgOptionsAnswer from '../../../../img/left-arrow.png'

class MyPoolsScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    title: 'PROPIAS',
    headerTitle: '',
  })

  componentWillMount(){
    this.props.getPolls()
  }

  render() {

    const polls = (

      this.props.pollList.map(pull => {

        let imgPollType = null
        let imgPollCategory = null

        if (pull.type === "boolean") imgPollType = imgBooleanAnswer
        else if (pull.type === "date") imgPollType = imgDateAnswer
        else if (pull.type === "options") imgPollType = imgOptionsAnswer

        if (pull.category === "football") imgPollCategory = imgBall
        else if (pull.category === "food") imgPollCategory = imgFood
        else if (pull.category === "group") imgPollCategory = imgFriends

        return (

          <View
            style={css.pollContainer}
            key = {pull.id}
          >
            <View style={css.imageContainer} >
              <Image
                source = {imgPollCategory}
                style = {css.img}
              >
              </Image>
            </View>
            <View style={css.textContainer} >
              <Text style={css.textTitle}>
                {pull.title}
              </Text>
              <Text style={css.textDescription}>
                {pull.description}
              </Text>
            </View>
            <TouchableHighlight style={css.imageContainer} >
              <Image
                source = {imgPollType}
                style = {css.img}
              >
              </Image>
            </TouchableHighlight>
          </View>

        )

      })

    )

    return (

      <View style={css.container}>
        {polls}
      </View>

    )

  }

}

export default MyPoolsScreen
