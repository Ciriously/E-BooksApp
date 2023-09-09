import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';



const Footer = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('home');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);

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
        icon={require('./assets/home.png')}
        isActive={activeTab === 'home'}
      >
        Home
      </TabButton>

      <TabButton
        tabName="bookmarks"
        onPress={() => handleTabPress('bookmarks')}
        icon={require('./assets/book.png')}
        isActive={activeTab === 'bookmarks'}
      >
        Library
      </TabButton>

      <TabButton
        tabName="profile"
        onPress={() => handleTabPress('profile')}
        icon={require('./assets/icon2.png')}
        isActive={activeTab === 'profile'}
        iconTintColor="blue"
      >
        Profile
      </TabButton>
    </View>
  );
};

const TabButton = ({ tabName, onPress, children, icon, isActive, iconTintColor }) => (
  <TouchableOpacity
    style={isActive ? styles.activeTab : styles.tab}
    onPress={onPress}
  >
    <View style={styles.tabContainer}>
      <Image
        source={icon}
        style={[
          styles.tabIcon,
          isActive && styles.activeTabIcon,
        ]}
        tintColor={isActive ? iconTintColor : undefined}
      />
      {isActive && (
        <Text
          style={[
            styles.tabText,
            isActive && styles.activeTabText,
          ]}
        >
          {children}
        </Text>
      )}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 2,
    paddingHorizontal: 5,
    shadowColor: 'pink', // Add shadow color (pink)
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: 'pink', // Add shadow color (pink)
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  tabContainer: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  tabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  activeTabIcon: {
    tintColor: 'red',
  },
  activeTabText: {
    color: 'red',
  },
});

export default Footer;
