import React from 'react'
import {Image,TouchableOpacity, View, StyleSheet, Text, TextInput} from 'react-native'
import {Button} from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
export default class HomeScreen extends React.Component {
  state = {
    username: '',
    password: '',
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
          <Text>ewfewfewfwef</Text>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    position: "absolute",
    width: 250,
    height: 52,
    left: 62,
    top: 501,
  },
  password: {
    position: "absolute",
    width: 250,
    height: 50,
    left: 62,
    top: 558,
  },
  login: {
    position: "absolute",
    width: 123,
    height: 40,
    left: 62,
    color:"#FFFFFF",
    top: 621,
    backgroundColor:"#FFFFFF"
  },
  signup:{
    position: "absolute",
    width: 143,
    height: 40,
    left: 190,
    top: 621,
    color:"#FFF",
    backgroundColor:"#B5FD40"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  logo:{
    position: "absolute",
    width: 213,
    height: 204,
    left: 100,
    top: 83
  }
});


