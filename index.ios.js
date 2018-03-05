// place code here for IOS

// Import Library To Help Create Components

import React  from 'react';
import {View ,AppRegistry } from 'react-native';
import Header from './src/components/Header'
import AlbumsList from './src/components/AlbumsList'


// Create Component 

const App = ()=>(  
  <View>
    <Header title="Albums !"/>
    <AlbumsList />
  </View>
)


// Render It to Device 
AppRegistry.registerComponent('Albums', () => App);


// export default class Albums extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('Albums', () => Albums);
