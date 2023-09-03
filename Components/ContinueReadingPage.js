import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ProgressBarAndroid, Button, Image } from 'react-native';

// Import local images
const book1Image = require('../assets/Images/image9.png');
const book2Image = require('../assets/Images/image9.png');
const book3Image = require('../assets/Images/image9.png');
const book4Image = require('../assets/Images/image9.png');

const tabs = [
  {
    id: '1',
    title: 'Tab 1',
    leftColor: 'red',
    rightColor: 'blue',
    bookTitle: 'Book A',
    authorName: 'Author X',
    progress: 0.7,
    image: book1Image, // Use the imported local image
  },
  {
    id: '2',
    title: 'Tab 2',
    leftColor: 'green',
    rightColor: 'yellow',
    bookTitle: 'Book B',
    authorName: 'Author Y',
    progress: 0.4,
    image: book2Image, // Use the imported local image
  },
  {
    id: '3',
    title: 'Tab 3',
    leftColor: 'purple',
    rightColor: 'orange',
    bookTitle: 'Book C',
    authorName: 'Author Z',
    progress: 0.2,
    image: book3Image, // Use the imported local image
  },
  {
    id: '4',
    title: 'Tab 4',
    leftColor: 'pink',
    rightColor: 'brown',
    bookTitle: 'Book D',
    authorName: 'Author W',
    progress: 0.9,
    image: book4Image, // Use the imported local image
  },
];

const TabList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ContinueReadingPage</Text>
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
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.authorName}>{item.authorName}</Text>
              <ProgressBarAndroid style={styles.progressBar} styleAttr="Horizontal" indeterminate={false} progress={item.progress} />
              <Button title="Continue" onPress={() => console.log('Continue button pressed')} />
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
    marginTop: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  authorName: {
    fontSize: 14,
    color: 'white',
  },
  progressBar: {
    marginTop: 10,
  },
});

export default TabList;
