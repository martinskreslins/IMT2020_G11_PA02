import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text> Hello World from Group 11 Member: Martins Kreslins!</Text>
      <Text>This is my Martins Kreslins first React Native application!</Text>
        <Image
          source= {require('./peepoHappi.jpg')}
          style= {{width:200, height:200}}
        />
        <Text> I am happy that this works!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});