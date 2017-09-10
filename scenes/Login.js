/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window')

export default class Login extends Component {

  handleRegister = () => {
    const {navigate} = this.props.navigation
    navigate('Register')
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width, height, position:'absolute'}}
          source={{uri: 'https://filtercon.files.wordpress.com/2015/08/lake-sierra-nevada-mnts.jpg'}}
        />
        <ScrollView>
          <Text style={styles.textContainer}>Clone App</Text>
          <TextInput
            style={styles.textInput}
            placeholder=' email'
            placeholderTextColor='#ffffff'
            underlineColorAndroid='rgba(0, 0, 0, 0)'
          />
          <TextInput
            style={styles.textInput}
            placeholder=' password'
            placeholderTextColor='#ffffff'
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleRegister}
            style={{alignSelf:'center'}}>
            <Text style={{color:'#000000', backgroundColor:'rgba(0, 0, 0, 0)'}}>
              don't have account ? <Text style={{color:'#015595'}}>Register here</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  textContainer: {
    alignSelf: 'center',
    marginVertical: 60,
    fontWeight:'bold',
    letterSpacing:4,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  textInput:{
    height:40,
    backgroundColor: 'rgba(34, 34, 34, 0.5)',
    borderRadius: 2,
    borderColor:'#ffffff',
    marginTop:10,
    marginBottom:10,
    color:'#ffffff'
  },
  button: {
    alignSelf: 'center',
    height: 50,
    width:300,
    marginTop: 30,
    marginBottom:10,
    borderRadius: 5,
    borderColor: '#dedede',
    borderWidth: 1,
    backgroundColor: '#015595',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton:{
    color:'#FFFFFF',
    fontWeight: 'bold',
    letterSpacing:4
  }
});
