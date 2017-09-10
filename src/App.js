/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import { Nonauthorized } from '../routes'

const StackNavigatorConfig = {
  headerMode: 'none',
  mode: 'modal'
}


class App extends Component {

  render() {
    const Root = StackNavigator({
      notauth: {
        screen: Nonauthorized,
      },
    },StackNavigatorConfig);

    return (
      <Root />
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
