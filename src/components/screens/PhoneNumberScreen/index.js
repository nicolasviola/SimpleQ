// Dependencies:
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

// Components:
import PhoneNumberScreen from './PhoneNumberScreen'

// Actions:
import { openCodeNumberScreen } from '../../../redux/modules/navigation/actions'

const mapStateToProps = (state) => {
  return {
    pollList: state.polls.pollList,
  }
}

const mapDispatchToProps = (dispatch) => ({
  openCodeNumberScreen: bindActionCreators(openCodeNumberScreen, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(PhoneNumberScreen)
