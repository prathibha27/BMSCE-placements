import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PDLoginScreen from '../Screens/PDLoginScreen';
import PDNotifications from '../Screens/PDNotifications';
import AddPostScreen from '../Screens/AddPostScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  PDtabs from './PDtabs';

const Stack = createStackNavigator();

export default function StackLoginPDNavigation({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PDLoginScreen"
                component={PDLoginScreen}
                options={{title: '',
                headerStyle: {
                    backgroundColor: '#0000',
                    height:0
                  }
                }}
            />
            <Stack.Screen
                name="PDtabs"
                component={PDtabs}
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
