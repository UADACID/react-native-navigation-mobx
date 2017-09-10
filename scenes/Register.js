/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { StackNavigator, NavigationActions } from 'react-navigation'

export default class Register extends Component {

  handleBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.handleBack}>I'm the Register component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
