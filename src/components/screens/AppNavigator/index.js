// Dependencies:
import React from 'react'
import { connect } from 'react-redux'

// Components:
import AppNavigator from './AppNavigator'

const mapStateToProps = state => ({
    nav: state.nav,
    // token: state.user.token,
    // sessionTokenChecked: state.user.sessionTokenChecked,
})

const mapDispatchToProps = dispatch => ({
    // getLoginInfoFromAsyncStorage: () => dispatch(getLoginInfoFromAsyncStorage()),
    dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator)
