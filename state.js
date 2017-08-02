import React , { Component } from  'react';
import { View, Text, StyleSheet } from 'react-native';

class Blink extends Component {
  constructor(props){
    super(props)
    this.state = { showText: true};
    
    setInterval(()=>{
      this.setState( previousState =>  {
        return {
          showText: !previousState.showText
        }
      })
    },1000)
  }

  render() {
    let display = this.state.showText ? this.props.name :  ' ';
    return (
      <View style={ styles.container}>
        <Text style={ styles.font } >{display}</Text>
      </View>  
    )
  }
}

export default class App extends Component{
  render() {
    return (
        <Blink name="evan"/>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 800,
    backgroundColor: 'hsla(360,100%, 40%, 0)'
  },
  font: {
    fontSize: 50,
    fontWeight: 'blod',
    fontStyle: 'italic',
    color: 'aquamarine',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 120
  }
})
