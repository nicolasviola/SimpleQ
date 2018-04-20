// Dependencies:
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import CodeNumberScreen from './CodeNumberScreen'

// Actions:
import { openProfileScreen } from '../../../redux/modules/navigation/actions'

const mapStateToProps = (state) => {
  return {
    pollList: state.polls.pollList,
  }
}

const mapDispatchToProps = (dispatch) => ({
  openProfileScreen: bindActionCreators(openProfileScreen, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(CodeNumberScreen)
