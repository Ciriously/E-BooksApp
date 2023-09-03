import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import ContinueReadingPage from './Components/ContinueReadingPage'; 

const Home = () => {
  const [fontsLoaded] = useFonts({
    'Gordita-Regular': require('./assets/fonts/Gordita-Regular.ttf'),
    'Gordita-Bold': require('./assets/fonts/Gordita-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navLeft}>
          <Text style={styles.goodMorningText}>Explore</Text>
        </View>
        <View style={styles.navRight}>
          <Image
            source={require('./assets/icon2.png')}
            style={styles.profileIcon}
          />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search for a book"
          placeholderTextColor="gray"
          style={styles.searchInput}
        />
        <Image
          source={require('./assets/search-icon.png')}
          style={styles.searchIcon}
        />
      </View>
      <Text style={styles.sectionTitle}>Continue Reading</Text>
      <ContinueReadingPage />
      {/* Title */}
      <Text style={styles.title}>Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
  },
  title: {
    fontFamily: 'Gordita-Bold',
    fontSize: 24,
    marginBottom: 20,
  },
  navbar: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    width: '100%',
    position: 'absolute',
    top: 20,
  },
  navLeft: {
    flex: 1,
  },
  navRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  goodMorningText: {
    fontSize: 38,
    fontFamily: 'Gordita-Bold',
  },
  profileIcon: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 120, // Adjust the top position to align it below the navbar
    width: 400,
    height: 50,
    paddingHorizontal: 30,
    marginLeft: 20, 
    marginRight: 20, 
    borderRadius: 25, 
    shadowColor: 'gray', 
    shadowOpacity: 0.5, 
    backgroundColor: '#F8F8F8', 
    
  },
  
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 3, // Adjust the left padding for the input
    fontFamily: 'Gordita-Regular',
    fontSize: 16,
  },
  
});

export default Home;
