import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { DestinationContextProvider, OriginContextProvider } from './src/contexts/contexts';
import RootNavigator from './src/navigations/RootNavigator';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function App() {
  return (
    <View style={styles.container}>
<DestinationContextProvider>
    <OriginContextProvider>
        <RootNavigator />
    </OriginContextProvider>
   </DestinationContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
