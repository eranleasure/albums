// index.ios.js - place code in here for iOS

// import library to create a component
import React from 'react';
import { AppRegistry } from 'react-native';

import Header from './src/components/header';

// create a component
const App = () => (
  <Header headerText={'Albums'} />
);

// render the component to device
AppRegistry.registerComponent('albums', () => App);
