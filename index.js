// Dependencies:
import { AppRegistry } from 'react-native';
import { YellowBox } from 'react-native';

// Components:
import App from './src/App';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('SimpleQ', () => App);
