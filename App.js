import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  var name = 'Denis Chernov';
  name.style = {color: '#939FC5'}
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Hello World from Group G11 <br/>
        Member: {name}<br/>       
        <p>This is my {name}<br/>
         first React Native application!<br/>
         Nice to see you here!</p>
      </Text>
      <image
        source = {require('./assets/snack-icon.png')}
      />
      
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
    textAlign: 'left',
    color: '#9AA4B3'
  },
});
