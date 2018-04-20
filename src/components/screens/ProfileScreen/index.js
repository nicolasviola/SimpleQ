// Dependencies:
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

// Components:
import ProfileScreen from './ProfileScreen'

//Actions:
import { openPrincipalScreen } from '../../../redux/modules/navigation/actions'

const mapStateToProps = (state) => {
  return {
    pollList: state.polls.pollList,
  }
}

const mapDispatchToProps = (dispatch) => ({
  openPrincipalScreen: bindActionCreators(openPrincipalScreen, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
