/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class SplahScreen extends Component {

  componentDidMount(){
    const { navigate } = this.props.navigation;
    setTimeout(() => {
      navigate('Login')
    }, 4000)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the SplahScreen component</Text>
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
