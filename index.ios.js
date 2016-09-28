// index.ios.js - place code in here for iOS

// import library to create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// create a component
const App = () => (
  <Text>Some Text</Text>
);

// render the component to device
AppRegistry.registerComponent('albums', () => App);
