import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  const handleTabPress = (tabName) => {
    // Navigate to the corresponding screen when a tab is pressed
    if (tabName === 'home') {
      navigation.navigate('Home');
    } else if (tabName === 'bookmarks') {
      navigation.navigate('Bookmarks');
    } else if (tabName === 'profile') {
      navigation.navigate('Profile');
    }
  };

  return (
    <View style={styles.footer}>
      <TabButton
        tabName="home"
        onPress={() => handleTabPress('home')}
        icon={require('./assets/home.png')} // Add the path to your home icon
      >
        Home
      </TabButton>

      <TabButton
        tabName="bookmarks"
        onPress={() => handleTabPress('bookmarks')}
        icon={require('./assets/book.png')} // Add the path to your bookmark icon
      >
        Library
      </TabButton>

      <TabButton
        tabName="profile"
        onPress={() => handleTabPress('profile')}
        icon={require('./assets/icon2.png')} // Add the path to your profile icon
      >
        Profile
      </TabButton>
    </View>
  );
};

const TabButton = ({ tabName, onPress, children, icon }) => (
  <TouchableOpacity
    style={styles.tab}
    onPress={onPress}
  >
    <View style={styles.tabContainer}>
      <Image source={icon} style={styles.tabIcon} />
      <Text style={styles.tabText}>
        {children}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginVertical: 10, // Adjust the vertical margin to raise the footer
    paddingHorizontal: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 24, // Adjust the icon size as needed
    height: 24, // Adjust the icon size as needed
    marginBottom: 5, // Adjust the margin between icon and text
  },
  tabText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Footer;
