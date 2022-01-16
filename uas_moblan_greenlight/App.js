import React from 'react';
import { View } from 'react-native';

//import lib navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card, ListItem, Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';

//import halaman screen
import Home from './screens/Home'
import Berita from './screens/Berita'
import Tips from './screens/Tips'
import Donasi from './screens/Donasi'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } 
            else if (route.name === 'Berita') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            }
            else if (route.name === 'Tips') {
              iconName = focused ? 'sunny' : 'sunny-outline';
            }
            else if (route.name === 'Donasi') {
              iconName = focused ? 'heart' : 'heart-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#4EB799',
          inactiveTintColor: '#030A3B',
        }}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Berita" component={Berita}/>
        <Tab.Screen name="Tips" component={Tips}/>
        <Tab.Screen name="Donasi" component={Donasi}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App;