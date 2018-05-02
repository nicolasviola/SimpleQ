// Dependencies:
import React, { Component } from 'react'

// Components:
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Modal,
} from 'react-native'
import Content from '../../layouts/Content'

// Style:
import css from './PrincipalScreen.style'

// Assets:
import imgProfile from '../../../../img/profile.png'
import imgCircle from '../../../../img/circle.png'
import imgBeer from '../../../../img/beer.png'
import imgMusic from '../../../../img/music.png'
import imgCoffe from '../../../../img/coffe.png'
import imgBoolean from '../../../../img/boolean.png'
import imgPositive from '../../../../img/positive.png'
import imgNegative from '../../../../img/negative.png'

class PrincipalScreen extends Component {

  componentWillMount(){
    this.props.getPolls()
  }

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {

    const modal = (

      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setModalVisible(!this.state.modalVisible)
        }}>
        <View style={css.modalContainer}>
          <View style={css.modal}>
            <View style={css.modalHeader}>
              <View style={css.modalImageContainer}>
                <Image
                  source = {imgBeer}
                  style = {css.modalImage}
                />
              </View>
              <View style={css.modalTextContainer}>
                <Text style={css.modalTextTitle}>
                  Salida con los chicos
                </Text>
                <View style={css.modalTextDescriptionContainer}>
                  <Text style={css.modalTextDescription}>
                    Lugar de encuentro
                  </Text>
                  <Text style={css.modalTextDescription}>
                    9/10
                  </Text>
                </View>
              </View>
            </View>
            <View style = {css.modalBody}>
              <TouchableHighlight style = {css.modalImageLargeContainer}>
                <Image
                  source = {imgPositive}
                  style = {css.modalImageLarge}
                />
              </TouchableHighlight>
              <TouchableHighlight style = {css.modalImageLarge}>
                <Image
                  source = {imgNegative}
                  style = {css.modalImageLarge}
                />
              </TouchableHighlight>
            </View>
            <View style={css.modalFooter}>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                <Text style={css.modalFooterText}>
                  Cerrar
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

    )

    const polls = (

      this.props.pollList.map(pull => {

        let imgPollType = null
        let imgPollCategory = null

        if (pull.type === "boolean") imgPollType = imgBoolean
        else if (pull.type === "date") imgPollType = imgDateAnswer
        else if (pull.type === "options") imgPollType = imgOptionsAnswer

        if (pull.category === "beer") imgPollCategory = imgBeer
        else if (pull.category === "music") imgPollCategory = imgMusic
        else if (pull.category === "coffe") imgPollCategory = imgCoffe

        return (

          <View
            style={css.pollContainer}
            key = {pull.id}
          >
            <View style={css.imageContainer} >
              <Image
                source = {imgPollCategory}
                style = {css.img}
              />
            </View>
            <View style={css.textContainer} >
              <Text style={css.textTitle}>
                {pull.title}
              </Text>
              <View style={css.textDescriptionContainer} >
                <Text style={css.textDescription}>
                  Lugar de encuentro
                </Text>
                <Text style={css.textDescription}>
                  {pull.date}
                </Text>
              </View>
            </View>
            <TouchableHighlight
              style={css.imageContainer}
              onPress={() => {
                this.setModalVisible(true)
              }}
            >
              <Image
                source = {imgPollType}
                style = {css.longImg}
              />
            </TouchableHighlight>
          </View>

        )

      })

    )

    return (

      <Content
        imgRight={imgCircle}
        imgLeft={imgProfile}
      >
        <View style={css.container}>
          {polls}
          {modal}
        </View>
      </Content>

    )

  }

}

export default PrincipalScreen
