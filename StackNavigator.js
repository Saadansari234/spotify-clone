import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Homescreen from './screens/Homescreen'
import Profilescreen from './screens/Profilescreen'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Loginscreen from './screens/Loginscreen'


const Tab = createBottomTabNavigator()

const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: "rgba(0,0,0,0.5)",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                shadowOpacity: 4,
                shadowRadius: 4,
                elevation: 4,
                shadowOffset: {
                    width: 0,
                    height: -4
                },
                borderTopWidth: 0
            }
        }}>
            <Tab.Screen name='Home' component={Homescreen}
                options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarStyle: { color: "white" },
                    tabBarIcon: ({ focused }) =>
                        focused ? (<Entypo name="home" size={24} color="black" />) :
                            (<AntDesign name="home" size={24} color="black" />)

                }}
            />
            <Tab.Screen name='Profile' component={Profilescreen}
                options={{
                    tabBarLabel: "Profile",
                    headerShown: false,
                    tabBarStyle: { color: "white" },
                    tabBarIcon: ({ focused }) =>
                        focused ? (<Ionicons name="person" size={24} color="black" />) :
                            (<Ionicons name="person-outline" size={24} color="black" />)

                }}
            />
        </Tab.Navigator>
    )
}



const Stack = createStackNavigator()

function Navigations() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Loginscreen} options={{ headerShown: false }} />
                <Stack.Screen name='Main' component={BottomTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Navigations