/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class FirstView extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigate('secoundView')}
          >
          <Text>Pencet</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class SecoundView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Ini Halaman Kedua</Text>
      </View>
    );
  }
}

const App = StackNavigator({
  firstView: {
    screen: FirstView,
  },
  secoundView: {
    screen: SecoundView,
  },
});

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
