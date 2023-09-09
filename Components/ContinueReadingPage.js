import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ProgressBarAndroid, Image } from 'react-native';
import { useFonts } from 'expo-font'; // Import useFonts from expo-font

// Import local images
const book1Image = require('../assets/Images/1.png');
const book2Image = require('../assets/Images/2.png');
const book3Image = require('../assets/Images/3.png');
const book4Image = require('../assets/Images/4.png');

const tabs = [
  {
    id: '1',
    title: 'Tab 1',
    leftColor: '#CBF5FF',
    rightColor: '#fff',
    bookTitle: 'A Day of Fallen Night',
    authorName: 'Samantha Shannon',
    progress: 0.7,
    image: book1Image,
  },
  {
    id: '2',
    title: 'Tab 2',
    leftColor: '#DEDFE2',
    rightColor: '#fff',
    bookTitle: 'Book B',
    authorName: 'Author Y',
    progress: 0.4,
    image: book2Image,
  },
  {
    id: '3',
    title: 'Tab 3',
    leftColor: '#F5EABD',
    rightColor: '#fff',
    bookTitle: 'Book C',
    authorName: 'Author Z',
    progress: 0.2,
    image: book3Image,
  },
  {
    id: '4',
    title: 'Tab 4',
    leftColor: 'pink',
    rightColor: 'brown',
    bookTitle: 'Book D',
    authorName: 'Author W',
    progress: 0.9,
    image: book4Image,
  },
];

const TabList = () => {
  const [fontsLoaded] = useFonts({
    'Gordita-Bold': require('../assets/fonts/Gordita-Bold.ttf'), // Load the Gordita Bold font
    'Gordita-Medium': require('../assets/fonts/Gordita-Medium.ttf'),
    'Gordita-Regular': require('../assets/fonts/Gordita-Regular.ttf'), // Load the Gordita Regular font
  });

  // Check if the font is loaded before rendering the component
  if (!fontsLoaded) {
    return null; // Render nothing or a loading screen
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Continue Reading Page</Text>
      <FlatList
        data={tabs}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.tab}>
            <View style={[styles.leftSection, { backgroundColor: item.leftColor }]}>
              <Image source={item.image} style={styles.bookImage} />
            </View>
            <View style={[styles.rightSection, { backgroundColor: item.rightColor }]}>
              <Text style={styles.bookTitle}>{item.bookTitle}</Text>
              <Text style={styles.authorName}>{item.authorName}</Text>
              <ProgressBarAndroid style={styles.progressBar} styleAttr="Horizontal" indeterminate={false} progress={item.progress} />
              <TouchableOpacity style={styles.continueButton} onPress={() => console.log('Continue button pressed')}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 210,
    backgroundColor: '#fff',
    marginRight: -40,
    marginLeft: -10,
  },
  title: {
    fontFamily: 'Gordita-Medium', // Use the Gordita Bold font
    fontSize: 24,
    marginBottom: 10,
    paddingLeft: 10,
  },
  tab: {
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
    height: 200,
    width: 290,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSection: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  rightSection: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  bookImage: {
    width: 80,
    height: 120,
    resizeMode: 'contain',
  },
  bookTitle: {
    fontFamily: 'Gordita-Bold', // Use the Gordita Bold font
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  authorName: {
    fontFamily: 'Gordita-Regular', // Use the Gordita Regular font
    fontSize: 14,
    color: 'black',
  },
  progressBar: {
    marginTop: 10,
  },
  continueButton: {
    backgroundColor: 'white',
    borderColor: '#404066',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#404066',
    fontFamily : 'Gordita-Medium', // Use the Gordita Medium font
    fontSize: 14,
  },
});

export default TabList;
