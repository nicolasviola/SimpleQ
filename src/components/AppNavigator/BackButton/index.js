// Dependencies:
import { connect } from 'react-redux'

// Components:
import BackButton from './BackButton'

const mapStateToProps = state => ({ nav: state.nav })

export default connect(mapStateToProps)(BackButton)
