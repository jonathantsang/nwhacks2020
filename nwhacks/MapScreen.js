import React from 'react'
import {Image,TouchableOpacity, View, StyleSheet, Text, TextInput} from 'react-native'
import {Button} from 'native-base';
import { createAppContainer } from 'react-navigation';

export default class MapScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
            <Image source={require('./images/map.png')} style={styles.mapImage} />
            <Image source={require('./images/input1.png')} style={styles.inputOne}></Image>
            <Image source={require('./images/input2.png')} style={styles.inputTwo}></Image>
            <Button success style={styles.reserve} onPress={() => navigate('Wallet')}><Text style={styles.reserveText}>Reserve</Text></Button>
            <Image source={require('./images/feebreadown.png')} style={styles.feeBreak}></Image>
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
  mapImage:{
    position: "absolute",
    width: "95%",
    height: 500,
    top: 20,
    borderRadius: 26
  },
  inputOne:{
    position: "absolute",
    width: 340,
    height: 21,
    top: 530,
  },
  inputTwo:{
    position: "absolute",
    width: 340,
    height: 21,
    top: 570,
  },
  reserve:{
    position: "absolute",
    width: 341,
    height: 78,
    left: 41,
    top: 620,
    backgroundColor:"#8AEBA5"
  },
  reserveText:{
      left:120,
      fontSize: 30
  },
  feeBreak:{
    position: "absolute",
    width: 89,
    height: 18,
    left: 17,
    top: 764
  }
});


