import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GenreScreen from '../Components/GenreScreen';
import { StyleSheet } from 'react-native'; // Import StyleSheet

const Tab = createMaterialTopTabNavigator();

const BooksGenreTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarScrollEnabled: true,
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: 'white',
          paddingTop: 100,
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'pink',
        },
        tabBarItemStyle: {
          marginHorizontal: 12, // Adjust the horizontal spacing between tabs
        },
      }}
    >
      <Tab.Screen name="Fiction" component={GenreScreen} initialParams={{ genre: 'Fiction' }} />
      <Tab.Screen name="Mystery" component={GenreScreen} initialParams={{ genre: 'Mystery' }} />
      <Tab.Screen name="Science Fiction" component={GenreScreen} initialParams={{ genre: 'Science Fiction' }} />
      <Tab.Screen name="Romance" component={GenreScreen} initialParams={{ genre: 'Romance' }} />
      <Tab.Screen name="Fantasy" component={GenreScreen} initialParams={{ genre: 'Fantasy' }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  // Add more styles here as needed
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
});

export default BooksGenreTabs;
