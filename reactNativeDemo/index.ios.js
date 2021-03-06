//import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';


//create a component

const App = () => {
  return (
    <Header/> //component nesting
  )
}

//render it to the device

AppRegistry.registerComponent('reactNativeDemo', () => App);