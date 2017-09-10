/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Loading from '../component/loading'

export default class Home extends Component {

  state = {
    isLoading:true
  }

  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading : false
      })
    }, 2000);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Loading />
      );
    }
    return (
      <View style={styles.container}>
        <Text>I'm the Home component</Text>
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
