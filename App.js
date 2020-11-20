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
import Profile2 from './Screens/Profile2';
import Profile3 from './Screens/Profile3';
import Profile4 from './Screens/Profile4';
import Profile5 from './Screens/Profile5';
export default function App() {
  return (
    // <NavigationContainer style={styles.container}>
    //   <MyTabs/>
    // </NavigationContainer>
    <Profile2/>
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
