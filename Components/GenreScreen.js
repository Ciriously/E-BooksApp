import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

// Dummy data for books (include local image paths)
const dummyData = {
  Fiction: [
    {
      id: '1',
      title: 'Book 1',
      author: 'Author 1',
      image: require('../assets/Images/1.png'),
    },
    {
      id: '2',
      title: 'Book 2',
      author: 'Author 2',
      image: require('../assets/Images/2.png'),
    },
    {
        id: '2',
        title: 'Book 2',
        author: 'Author 2',
        image: require('../assets/Images/2.png'),
      },{
        id: '2',
        title: 'Book 2',
        author: 'Author 2',
        image: require('../assets/Images/2.png'),
      },
  ],
  Mystery: [
    {
      id: '3',
      title: 'Book 3',
      author: 'Author 3',
      image: require('../assets/Images/3.png'),
    },
    {
      id: '4',
      title: 'Book 4',
      author: 'Author 4',
      image: require('../assets/Images/4.png'),
    },
    // Add more books for the Mystery genre
  ],
  // Add more genres and books as needed
};

const GenreScreen = ({ route }) => {
  const { genre } = route.params;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Simulate loading books based on the selected genre
    const loadedBooks = dummyData[genre];
    setBooks(loadedBooks || []);
  }, [genre]);

  return (
    <View style={styles.container}>
      <Text style={styles.genreTitle}>{genre} Books</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        numColumns={2} // Two columns for the grid view
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Image
              source={item.image} // Use the local image path
              style={styles.bookImage}
            />
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>Author: {item.author}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  genreTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 8,
    padding: 18,
    // borderColor: 'gray',
    // borderWidth: 1,
    // borderRadius: 8,
  },
  bookImage: {
    width: 150, // Set a fixed width
    height: 220, // Set a fixed height
    resizeMode: 'cover',
    marginBottom: 8,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bookAuthor: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default GenreScreen;
