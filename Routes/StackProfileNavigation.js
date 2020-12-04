import React from 'react';
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Profile2Screen from '../Screens/Profile2Screen';
import Profile3Screen from '../Screens/Profile3Screen';
import Profile4Screen from '../Screens/Profile4Screen';
import Profile5Screen from '../Screens/Profile5Screen';

const Stack = createStackNavigator();

export default function StackExpNavigation({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile2Screen"
                component={Profile2Screen}
                options={{title: '',
                headerStyle: {
                    backgroundColor: '#0000',
                    height:0
                  }
                }}
            />
            <Stack.Screen
                name="Profile3Screen"
                component={Profile3Screen}
                options={{title: '',
                headerStyle: {
                    backgroundColor: '#0000',
                    height:0
                  }
                }}
            />
            <Stack.Screen
                name="Profile4Screen"
                component={Profile4Screen}
                options={{title: '',
                headerStyle: {
                    backgroundColor: '#0000',
                    height:0
                  }
                }}
            />
            <Stack.Screen
                name="Profile5Screen"
                component={Profile5Screen}
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
