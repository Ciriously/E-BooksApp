import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
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
    <ScrollView contentContainerStyle={styles.container}>
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
      {/* <Text style={styles.sectionTitle}>Continue Reading</Text> */}
      <ContinueReadingPage />
      {/* Tabs Container */}
      
      
   </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Gordita-Bold',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  navbar: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 30,
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
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    // marginTop: 0,
    marginBottom: -200,
    marginLeft: -10,
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
    paddingLeft: 10,
    fontFamily: 'Gordita-Regular',
    fontSize: 16,
  },
  sectionTitle: {
    fontFamily: 'Gordita-Bold',
    fontSize: 20,
    marginBottom: 10,
  },
  tabsContainer: {
    marginTop: 20,
  },
});

export default Home;
