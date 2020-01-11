import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import AppNavigator from '';
import stores from '';
import {
  Styleprovider
} from 'native-base';
import getTheme from '';
import custom from '';

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