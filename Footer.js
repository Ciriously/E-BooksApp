import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  const handleTabPress = (tabName) => {
    // Navigate to the corresponding screen when a tab is pressed
    if (tabName === 'profile') {
      navigation.navigate('Profile');
    } else if (tabName === 'bookmarks') {
      navigation.navigate('Bookmarks');
    }
  };

  return (
    <View style={styles.container}>
      <TabButton
        tabName="home"
        onPress={() => handleTabPress('home')}
      >
        Home
      </TabButton>

      <TabButton
        tabName="bookmarks"
        onPress={() => handleTabPress('bookmarks')}
      >
        Library
      </TabButton>

      <TabButton
        tabName="profile"
        onPress={() => handleTabPress('profile')}
      >
        Profile
      </TabButton>
    </View>
  );
};

const TabButton = ({ tabName, onPress, children }) => (
  <TouchableOpacity
    style={styles.tab}
    onPress={onPress}
  >
    <Text style={styles.tabText}>
      {children}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    height: 60,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  tabText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Footer;
