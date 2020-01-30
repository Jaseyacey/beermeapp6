// import React, { Component } from 'react';
// import { Provider } from 'mobx-react';
// import AppNavigator from './app.navigator';
// import stores from './app/stores';
// import {
//   Styleprovider
// } from 'native-base';
// import getTheme from './native-base-theme/components';
// import custom from './native-base-theme/variables/custom';

// export default class App extends Component {
//   render() {
//     return (
//       <Provider stores={stores}>
//         <Styleprovider style={getTheme(custom)}>
//           <AppNavigator/>
//         </Styleprovider>
//       </Provider>
//     );
//   }
// }
import React from 'react'
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View
} from 'react-native';
import { SwitchNavigator } from 'react-navigation';

import SplashScreen from './app/screens/splash.screen';
import signupScreen from './app/screens/signup.screen';
import loginScreen from './app/screens/login.screen';
import main from './app/screens/main.screen';

const App = SwitchNavigator (
  {
    SplashScreen,
    signupScreen,
    loginScreen,
    main
  }
)

export default App; 