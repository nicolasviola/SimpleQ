import React from 'react';
import {
    addNavigationHelpers,
} from 'react-navigation';
import Navigation from './Navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';


class AppNavigation extends React.Component {
    // componentWillMount() {
    //     // Check to see if the user is signed in on this device
    //     if (!this.props.token && !this.props.sessionTokenChecked) {
    //         this.props.getLoginInfoFromAsyncStorage();
    //     }
    // }

    render() {
        const addListener = createReduxBoundAddListener('root');
        return (
            <Navigation
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    addListener,
                })}
            />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
    // token: state.user.token,
    // sessionTokenChecked: state.user.sessionTokenChecked,
});

const mapDispatchToProps = dispatch => ({
    // getLoginInfoFromAsyncStorage: () => dispatch(getLoginInfoFromAsyncStorage()),
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
