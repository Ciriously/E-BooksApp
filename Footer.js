import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const Footer = ({ activeTab, onChangeTab, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'home' && styles.activeTab]}
        onPress={() => onChangeTab('home')}
      >
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === 'bookmarks' && styles.activeTab]}
        onPress={() => onChangeTab('bookmarks')}
      >
        <Text style={styles.tabText}>Bookmarks</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === 'profile' && styles.activeTab]}
        onPress={() => {
          onChangeTab('profile');
          // Navigate to the profile screen when the Profile tab is pressed
          navigation.navigate('Profile');
        }}
      >
        <Text style={styles.tabText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color of the footer
    borderTopWidth: 1,
    borderTopColor: '#ddd', // Border color at the top of the footer
    height: 60, // Height of the footer
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  activeTab: {
    backgroundColor: '#007AFF', // Background color for the active tab
  },
  tabText: {
    color: '#000', // Text color for inactive tabs
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#fff', // Text color for the active tab
  },
});

export default Footer;
