import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import MyPoolsScreen from './MyPoolsScreen'
import { getPolls } from '../../redux/modules/polls/actions'

const mapStateToProps = (state) => {
  return {
    pollList: state.polls.pollList,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPolls: bindActionCreators(getPolls, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps) (MyPoolsScreen);
