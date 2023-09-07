// PopularNow.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const data = [
  {
    id: '1',
    title: 'Book 1',
    author: 'Author 1',
    imageUrl: require('../assets/Images/1.png'),
  },
  {
    id: '2',
    title: 'Book 2',
    author: 'Author 2',
    imageUrl: require('../assets/Images/1.png'),
  },
  {
    id: '3',
    title: 'Book 3',
    author: 'Author 3',
    imageUrl: require('../assets/Images/1.png'),
  },
  // Add more books as needed
];

const PopularNow = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.imageUrl} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Text style={styles.bookAuthor}>{item.author}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Popular Now</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  sectionTitle: {
    fontFamily: 'Gordita-Bold',
    fontSize: 20,
    marginBottom: 10,
  },
  itemContainer: {
    marginRight: 20,
  },
  bookImage: {
    width: 120,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  bookTitle: {
    marginTop: 5,
    fontFamily: 'Gordita-Bold',
    fontSize: 16,
  },
  bookAuthor: {
    fontFamily: 'Gordita-Regular',
    fontSize: 14,
    color: 'gray',
  },
});

export default PopularNow;
