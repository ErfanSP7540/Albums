// place code here for IOS

// Import Library To Help Create Components

import React  from 'react';
import {View ,AppRegistry } from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumsList'


// Create Component 

const App = ()=>(  
  <View>
    <Header title="Albums !"/>
    <AlbumList />
  </View>
)


// Render It to Device 
AppRegistry.registerComponent('Albums', () => App);
