import React from 'react'
import {Image,TouchableOpacity, View, StyleSheet, Text, TextInput} from 'react-native'
import {Button} from 'native-base'
export default class LoginScreen extends React.Component {
  state = {
    username: '',
    password: '',
  }
  handlePasswordUpdate = (passowrd) =>{
    console.log(passowrd);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
          <Image source={require('./images/land.jpg')} style={styles.backgroundImage} />
          <Image source={require('./images/black.png')} style={styles.logo} />
          <TextInput
            style={styles.username}
            placeholder="username"
            placeholderTextColor="#000000"
            onChangeText={this.handlePasswordUpdate}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.password}
            placeholderTextColor="#000000"
            placeholder="password"
            onChangeText={this.handlePasswordUpdate}
            secureTextEntry
          />
          <Button style={styles.login} primary onPress={() => navigate('Map')}><Text style={{color:"#000000"}}> Login </Text></Button>
          <Button style={styles.signup} primary><Text style={{color:"#000000"}}> Signup </Text></Button>
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
