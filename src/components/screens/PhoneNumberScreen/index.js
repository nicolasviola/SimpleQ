// Dependencies:
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'
import {bindActionCreators} from 'redux'

// Components:
import PhoneNumberScreen from './PhoneNumberScreen'

// Actions:
import { openCodeNumberScreen } from '../../../redux/modules/navigation/actions'

const mapStateToProps = (state) => {

  const selector = formValueSelector('telephoneNumberForm')

  return {
    pollList: state.polls.pollList,
    telephoneNumber: selector(state, 'telephoneNumber'),
  }
}

const mapDispatchToProps = (dispatch) => ({
  openCodeNumberScreen: bindActionCreators(openCodeNumberScreen, dispatch),
})

const onSubmit = (values, dispatch, props) => ({})

const reduxFormConfig = {
  onSubmit,
  form: 'telephoneNumberForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm(reduxFormConfig)(PhoneNumberScreen)
)
