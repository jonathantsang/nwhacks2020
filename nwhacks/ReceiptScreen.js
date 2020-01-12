import React from 'react'
import {Image,TouchableOpacity, View, StyleSheet, Text, TextInput} from 'react-native'
import {Button} from 'native-base';
import { createAppContainer } from 'react-navigation';

export default class WalletScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
            <Image source={require('./images/after.png')} style={styles.receipt} />
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
  receipt:{
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
  }
});


