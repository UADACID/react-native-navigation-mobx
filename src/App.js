/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import { Nonauthorized, Authorized } from '../routes'


class App extends Component {

  state = {
    logedIn:false
  }

  componentDidMount(){
    setTimeout(()=> {
      this.setState({
        logedIn:true
      })
    }, 10000);
  }

  render() {

    const {logedIn} = this.state

    const StackNavigatorConfig = {
      headerMode: 'none',
      mode: 'modal',
    }

    const RootNotAuth = StackNavigator({
      notauth: {
        screen: Nonauthorized,
      },
    },StackNavigatorConfig);

    const RootAuth = StackNavigator({
      auth: {
        screen: Authorized,
      },
    },StackNavigatorConfig);

    if (logedIn) {
      return(
        <RootAuth />
      )
    }
    return (
      <RootNotAuth />
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
