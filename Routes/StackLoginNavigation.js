import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import StackExpNavigation from './StackExpNavigation';
import AddPostScreen from '../Screens/AddPostScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  MyTabs from './tabs';

const Stack = createStackNavigator();

export default function StackLoginNavigation({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{title: '',
                headerStyle: {
                    backgroundColor: '#0000',
                    height:0
                  }
                }}
            />
            <Stack.Screen
                name="StackExpNavigation"
                component={MyTabs}
                options={{title: '',
                headerStyle: {
                    backgroundColor: '#0000',
                    height:0
                  }
                }}
            />
        </Stack.Navigator>
    );
}
