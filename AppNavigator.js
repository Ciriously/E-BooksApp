import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "./Pages/Onboarding";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Bookmarks from "./Pages/library";
import Reader from "./Reader";
import Footer from "./Footer";
import Login from "./Pages/Login";
import NewBookInfo from "./Components/NewBookInfo";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
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
          name="NewBookInfo"
          component={NewBookInfo}
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
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

export default AppNavigator;
