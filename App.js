import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/LoginScreen';
import Post from './Components/Post';
import Images from './Constants/Images';
import Experiences from './Screens/ExperiencesScreen';
import MyTabs from './Routes/tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Notifications from './Screens/NotificationsScreen';
import Profile1 from './Screens/Profile1Screen';
import Profile2 from './Screens/Profile2Screen';
import Profile3 from './Screens/Profile3Screen';
import Profile4 from './Screens/Profile4Screen';
import Profile5 from './Screens/Profile5Screen';
import StackLoginNavigation from './Routes/StackLoginNavigation';
import Profile from './Screens/Profile1Screen';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyC4QMPglj6Kj_zU9yMJdrs0qScEylISs0E",
  authDomain: "bmsce-placements-83244.firebaseapp.com",
  projectId: "bmsce-placements-83244",
  storageBucket: "bmsce-placements-83244.appspot.com",
  messagingSenderId: "91578633765",
  appId: "1:91578633765:web:8b5da4b9348247207bf9cc",
  measurementId: "G-G5LCKGMLMR"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {

  return (
    // <NavigationContainer style={styles.container}>
    //   <MyTabs/>
    // </NavigationContainer>
    // <NavigationContainer style={styles.container}>
    //   <StackLoginNavigation/>
    // </NavigationContainer>
    //<Profile5/>
    <Login/>
    
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
