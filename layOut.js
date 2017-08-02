import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container} >
        <View style={{height:50, backgroundColor:'red'}}></View>
        <View style={{height:50, backgroundColor:'green'}}></View>
        <View style={{height:50, backgroundColor:'yellow'}}></View>
      </View>  
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
})
