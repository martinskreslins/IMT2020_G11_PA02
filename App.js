import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <p>Hello World from Group 11 Member: Martins Kreslins!</p>
        <p>This is my Martins Kreslins first React Native application!<br/>
        No idea why it works. But it works!</p>
        </Text>
        <Image
          source= {{uri: "https://pbs.twimg.com/profile_images/1113929952406061056/QZdZjFUw_400x400.jpg"}}
          style= {{width:200, height:200}}
        />
        
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