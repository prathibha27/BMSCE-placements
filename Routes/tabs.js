import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../Constants/Colors';
import Experiences from '../Screens/ExperiencesScreen';
import Notifications from '../Screens/NotificationsScreen';
import Profile from '../Screens/Profile2Screen';
import GreyLine from '../Components/GreyLine';
import StackExpNavigation from '../Routes/StackExpNavigation';
import StackProfileNavigation from '../Routes/StackProfileNavigation';


const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Colors.blue}
      inactiveColor={Colors.gray}
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: 'black' }}
    >
      <Tab.Screen
        name="Home"
        component={StackExpNavigation}
        options={{
          //tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={StackProfileNavigation}
        options={{
          //tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          //tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Notifications}
        options={{
          //tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


