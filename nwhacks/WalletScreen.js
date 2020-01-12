import React from 'react'
import {Image,TouchableOpacity, View, StyleSheet, Text, TextInput,ImageBackground} from 'react-native'
import {Button} from 'native-base';
import { createAppContainer } from 'react-navigation';

export default class WalletScreen extends React.Component {
    state = {
        name:"Mickey Mouse",
        amount:0
    }
  getVal = async () =>{
    try {
      var res = await fetch("https://us-central1-ultra-might-264612.cloudfunctions.net/function-2");
      let responseJson = await res.json();
      console.log(responseJson);
      this.setState({amount:responseJson.qty})   
    } catch (error) {
      console.log(error)
    }
  }
  componentDidMount () {
    this.getVal();
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./images/back.png')} style={styles.person}>
                    <Text style={styles.name}>{this.state.name}</Text>
                    <Text style={styles.amount}>$ {this.state.amount}</Text>
            </ImageBackground>
            <TouchableOpacity style={styles.receipt} onPress={() => navigate('Receipt')}><Image source={require('./images/receipt.png')} style={styles.inpic}></Image></TouchableOpacity>
            {/* <Text>Fee Breakdown</Text> */}
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
  person:{
    position: "absolute",
    width: "100%",
    height: 490,
    top: 0,
  },
  money:{
    position: "absolute",
    width: "100%",
    height: 230,
    top:250
  },
  receipt:{
    position: "absolute",
    width: "100%",
    height: 355,
    top:470,
  },
  inpic:{
    width: "100%",
    height: 355,  
  }, 
  name: {
    position: "absolute",
    width: 200,
    height: 50,
    left: 105,
    top: 100,
    fontSize:30,
    fontWeight:"bold"
  },
  amount:{
    position: "absolute",
    width: 220,
    height: 70,
    left: 105,
    top: 170,
    fontSize:70
  }
});


