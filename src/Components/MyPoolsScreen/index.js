import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import MyPoolsScreen from './MyPoolsScreen'
import { getPolls } from '../../redux/modules/product/actions'

const mapStateToProps = ( state => {
  return {
    pollList: state.polls.pollList,
  }
})

const mapDispatchToProps = (dispatch) => ({
  getPolls: bindActionCreators(getPolls, dispatch),
})

// const mapDispatchToProps = (dispatch) => {
//   return (
//     bindActionCreators({
//       addToCart,
//       getProducts,
//     }, dispatch)
//   )
// }

export default connect(mapStateToProps, mapDispatchToProps) (MyPoolsScreen);
