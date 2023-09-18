import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./Login";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Bookmarks from "./Pages/library";
import Reader from "./Reader";
import Footer from "./Footer";
import NewBookInfo from "./NewBookInfo"; // Import the NewBookInfo screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bookmarks"
          component={Bookmarks}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reader"
          component={Reader}
          options={{ headerShown: false }}
        />
        {/* Add the NewBookInfo screen to the stack */}
        <Stack.Screen
          name="NewBookInfo"
          component={NewBookInfo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}
