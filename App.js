import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/LoginScreen';
import Post from './Components/Post';
import Images from './Constants/Images';
import Experiences from './Screens/Experiences';
import MyTabs from './Routes/tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Notifications from './Screens/Notifications';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <MyTabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
