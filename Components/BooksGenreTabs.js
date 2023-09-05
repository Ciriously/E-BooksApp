// BooksGenreTabs.js

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GenreScreen from './GenreScreen';

const Tab = createMaterialTopTabNavigator();

const BooksGenreTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        scrollEnabled: true, // Enable scrollable tabs
        tabStyle: { width: 'auto' }, // Make each tab take its content's width
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

export default BooksGenreTabs;
