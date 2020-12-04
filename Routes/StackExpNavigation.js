import React from 'react';
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ExperiencesScreen from '../Screens/ExperiencesScreen';
import PostDetailScreen from '../Screens/PostDetailScreen';
import AddPostScreen from '../Screens/AddPostScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function StackExpNavigation({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ExperiencesScreen"
                component={ExperiencesScreen}
                options={{title: '',
                headerStyle: {
                    backgroundColor: '#0000',
                    height:0
                  }
                }}
            />
            <Stack.Screen
                name="PostDetailScreen"
                component={PostDetailScreen}
                options={{title: '',
                headerStyle: {
                    backgroundColor: '#0000',
                    height:0
                  }
                }}
            />
            <Stack.Screen
                name="AddPostScreen"
                component={AddPostScreen}
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
