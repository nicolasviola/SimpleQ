// Dependencies:
import { connect } from 'react-redux'
import BackButton from './BackButton'

const mapStateToProps = state => ({ nav: state.nav })

export default connect(mapStateToProps)(BackButton)
