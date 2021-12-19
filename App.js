import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { HomeScreen } from './src/screens/HomeScreen';
import RequestScreen from './src/screens/RequestScreen';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function App() {
  return (
    <View style={styles.container}>

      <RequestScreen />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
