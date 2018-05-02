// Dependencies:
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components:
import PrincipalScreen from './PrincipalScreen'

// Actions:
import { getPolls } from '../../../redux/modules/polls/actions'

const mapStateToProps = (state) => {
  return {
    pollList: state.polls.pollList,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPolls: bindActionCreators(getPolls, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps) (PrincipalScreen)
