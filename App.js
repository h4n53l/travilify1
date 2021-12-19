import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { HomeScreen } from './src/screens/HomeScreen';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function App() {
  return (
    <View style={styles.container}>

      <HomeScreen />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
