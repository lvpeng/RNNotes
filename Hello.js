import React , { Component } from  'react';
import { View, Text, Image } from 'react-native';

export default class App extends Component{
  render() {
      return (
	  <View>
	      <Text >Hello, World</Text>
	      <Image
                source = { {url : 'https://facebook.github.io/react/img/logo_og.png'} }
	      />
	  </View>
      )
  }
}

