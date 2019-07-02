/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import SignUp from './src/components/SignUp';
import { name as appName } from './app.json';

const showCalculatorForm = false;

AppRegistry.registerComponent(appName, () => (showCalculatorForm ? App : SignUp));
