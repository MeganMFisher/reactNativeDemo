//import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';


//create a component

const App = () => {
  return (
    <Text>Hello Moto</Text>
  )
}

//render it to the device

AppRegistry.registerComponent('reactNativeDemo', () => App);