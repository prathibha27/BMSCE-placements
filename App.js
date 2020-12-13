import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Modal,TouchableOpacity } from 'react-native';
import Login from './Screens/LoginScreen';
import Post from './Components/Post';
import Images from './Constants/Images';
import Experiences from './Screens/ExperiencesScreen';
import MyTabs from './Routes/tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
//import Notification from './Screens/NotificationsScreen';
import Notification from './Screens/Notifications';
import Profile1 from './Screens/Profile1Screen';
import Profile2 from './Screens/Profile2Screen';
import Profile3 from './Screens/Profile3Screen';
import Profile4 from './Screens/Profile4Screen';
import Profile5 from './Screens/Profile5Screen';
import StackLoginNavigation from './Routes/StackLoginNavigation';
import PostScreen from './Screens/PostScreen'
import Profile from './Screens/Profile1Screen';
import * as firebase from 'firebase';
//import { firebase } from '@firebase/app';
//import 'firebase/auth';
//import 'firebase/firestore';
import {Permissions,Notifications} from 'expo';

/*var firebase = require('firebase/app');
// all 3 are optional and you only need to require them at the start
require('firebase/auth');
require('firebase/database');
require('firebase/storage');*/

const firebaseConfig =
{ 
    apiKey: "AIzaSyByhSbCr0uCKEMf7SUe5EjiV170O2LGFIs",
  authDomain: "bmsce-placements-af860.firebaseapp.com",
  databaseURL: "https://bmsce-placements-af860.firebaseio.com",
  projectId: "bmsce-placements-af860",
  storageBucket: "bmsce-placements-af860.appspot.com",
  messagingSenderId: "128144094885",
  appId: "1:128144094885:web:55987fac34050c02213f4c",
  measurementId: "G-C7R3HV9G5R"
 } ;


export default function App() {

 /* if (!firebase.app.length) 
{
console.log("connected to firebase")

 firebase.initializeApp(firebaseConfig);

};*/


return (
    // <NavigationContainer style={styles.container}>
    //   <MyTabs/>
    // </NavigationContainer>
    // <NavigationContainer style={styles.container}>
    //   <StackLoginNavigation/>
    // </NavigationContainer>
    <PostScreen/>
    //<Notification/>
    
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