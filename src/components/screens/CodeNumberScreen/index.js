// Dependencies:
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'
import {bindActionCreators} from 'redux';

// Components:
import CodeNumberScreen from './CodeNumberScreen'

// Actions:
import { openPrincipalScreen } from '../../../redux/modules/navigation/actions'
import { openPhoneNumberScreen } from '../../../redux/modules/navigation/actions'

const mapStateToProps = (state) => {

  const selector = formValueSelector('codeNumberForm')

  return {
    pollList: state.polls.pollList,
    codeNumber: selector(state, 'codeNumber'),
  }
}

const mapDispatchToProps = (dispatch) => ({
  openPrincipalScreen: bindActionCreators(openPrincipalScreen, dispatch),
  openPhoneNumberScreen: bindActionCreators(openPhoneNumberScreen, dispatch),
})

const onSubmit = (values, dispatch, props) => ({})

const reduxFormConfig = {
  onSubmit,
  form: 'codeNumberForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm(reduxFormConfig)(CodeNumberScreen)
)
