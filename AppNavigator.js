// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Login';
import Home from './Pages/Home';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
        initialParams={{ showFooter: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
