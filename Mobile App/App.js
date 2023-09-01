import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Homepage from './Homepage'

export default function App() {
  return (
    <View>
      <Homepage />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
