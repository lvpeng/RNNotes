import React from 'react';
import { View, StyleSheet,  TextInput, Text } from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { name: 'evan'}
  }
  
  render(){
    return (
      <View style={styles.container} >
        <View style={{height:50, backgroundColor:'red'}}></View>
        <View style={{height:50, backgroundColor:'green'}}></View>
        <View style={{height:50, backgroundColor:'yellow'}}></View>
          <TextInput
            style = { styles.textInput }
            placeholder = 'user name'
            onChangeText={ (text) => this.setState({name: text})}
          />
        <Text>{this.state.name}</Text>
      </View>  
      )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  textInput: {
    height: 40,
    bordeColor: 'grey',
    margin: 20
  }
})
