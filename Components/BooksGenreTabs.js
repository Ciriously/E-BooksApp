import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GenreScreen from './GenreScreen';

const Tab = createMaterialTopTabNavigator();

const BooksGenreTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarScrollEnabled: true,
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: 'white',
          paddingTop: 10,
          shadowColor: '#007AFF', // Light blue shadow color
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'pink',
        },
        tabBarItemStyle: {
          marginHorizontal: 12, // Adjust the horizontal spacing between tabs
        },
      })}
    >
      <Tab.Screen
        name="Fiction"
        component={GenreScreen}
        initialParams={{ genre: 'Fiction' }}
        options={{ tabBarShowLabel: true }} // Show tab labels
      />
      <Tab.Screen
        name="Mystery"
        component={GenreScreen}
        initialParams={{ genre: 'Mystery' }}
        options={{ tabBarShowLabel: true }} // Show tab labels
      />
      <Tab.Screen
        name="Science Fiction"
        component={GenreScreen}
        initialParams={{ genre: 'Science Fiction' }}
        options={{ tabBarShowLabel: true }} // Show tab labels
      />
      <Tab.Screen
        name="Romance"
        component={GenreScreen}
        initialParams={{ genre: 'Romance' }}
        options={{ tabBarShowLabel: true }} // Show tab labels
      />
      <Tab.Screen
        name="Fantasy"
        component={GenreScreen}
        initialParams={{ genre: 'Fantasy' }}
        options={{ tabBarShowLabel: true }} // Show tab labels
      />
    </Tab.Navigator>
  );
};

export default BooksGenreTabs;
