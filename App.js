import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/LoginScreen';
import Post from './Components/Post';
import Images from './Constants/Images';
import Experiences from './Screens/Experiences';

export default function App() {
  return (
    <View style={styles.container}>
      <Experiences/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
