// Dependencies:
import React, { PureComponent } from 'react'

// Components:
import {
  View,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native'

// Styles:
import css from './IconMenu.style'

// Assets:
import imgMenu from '../../../../img/menu.png'

class IconMenu extends PureComponent{

  render () {

    return (

      <View style={css.container}>
        <TouchableHighlight
          onPress={this.props.onPress}
          style={css.container}
        >
          <Image
            source = {imgMenu}
          />
        </TouchableHighlight>
      </View>

    )

  }

}

export default IconMenu
