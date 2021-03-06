import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import AppNavigator from './app.navigator';
import stores from './app/stores';
import {
  Styleprovider
} from 'native-base';
import getTheme from './native-base-theme/components';
import custom from './native-base-theme/variables/custom';

export default class App extends Component {
  render() {
    return (
      <Provider stores={stores}>
        <Styleprovider style={getTheme(custom)}>
          <AppNavigator/>
        </Styleprovider>
      </Provider>
    );
  }
}
