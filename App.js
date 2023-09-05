import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Login';
import Home from './Pages/Home';
import Footer from './Footer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen
  name="Login"
  component={LoginPage}
  options={{ headerShown: false }}
  initialParams={{ showFooter: false }} // Pass showFooter as false to hide the Footer
/>


        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <FooterContainer />
    </NavigationContainer>
  );
}

function FooterContainer() {
  const [showFooter, setShowFooter] = useState(true);

  return showFooter ? <Footer /> : null;
}
