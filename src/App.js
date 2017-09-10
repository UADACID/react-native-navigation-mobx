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
}

const App = StackNavigator({
  notauth: {
    screen: Nonauthorized,
  },
},StackNavigatorConfig);

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
