import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../Constants/Colors';
import Experiences from '../Screens/ExperiencesScreen';
import Profile from '../Screens/Profile2Screen';
import GreyLine from '../Components/GreyLine';
import PDNotifications from '../Screens/PDNotifications';
import AddUser from '../Screens/AddUser';


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
        name="Notifications"
        component={PDNotifications}
        options={{
          //tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AddUser"
        component={AddUser}
        options={{
          //tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}