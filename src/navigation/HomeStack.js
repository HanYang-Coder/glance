import React, { useContext } from 'react';
import { Alert } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ListingsScreen from '../screens/ListingsScreen';
import AddJobScreen from '../screens/AddJobScreen';
import { IconButton } from 'react-native-paper';
import ListingsDetailScreen from '../screens/ListingsDetailScreen';
import { AuthContext } from './AuthProvider'

const ChatAppStack = createStackNavigator();
const ModalStack = createStackNavigator();

function ChatApp() {
    const { logout } = useContext(AuthContext)
    return (
        <ChatAppStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#6646ee'
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                    fontSize: 22
                }
            }}
        >
            {/* <ChatAppStack.Screen
                name="Listings"
                component={ListingsScreen}
            /> */}
            <ChatAppStack.Screen
                name="Listings"
                component={ListingsScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <IconButton
                            icon="message-plus"
                            size={28}
                            color="#ffffff"
                            onPress={() => navigation.navigate('AddJob')}
                        />
                    ),
                    headerLeft: () => (
                        <IconButton
                            icon='logout-variant'
                            size={28}
                            color='#ffffff'
                            onPress={() => logout()}
                        />
                    )
                })}
            />
            <ChatAppStack.Screen
                name="Details"
                component={ListingsDetailScreen}
                options={({ route }) => ({
                    title: route.params.thread.name
                })}
            />

        </ChatAppStack.Navigator>
    );
}

export default function HomeStack() {
    return (
        <ModalStack.Navigator mode="modal" headerMode="none">
            <ModalStack.Screen name="ChatApp" component={ChatApp} />
            <ModalStack.Screen name="AddJob" component={AddJobScreen} />
        </ModalStack.Navigator>
    );
}