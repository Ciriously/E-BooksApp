// GenreScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Dummy data for books
const dummyData = {
  Fiction: [
    { id: '1', title: 'Book 1', author: 'Author 1' },
    { id: '2', title: 'Book 2', author: 'Author 2' },
    // Add more books for the Fiction genre
  ],
  Mystery: [
    { id: '3', title: 'Book 3', author: 'Author 3' },
    { id: '4', title: 'Book 4', author: 'Author 4' },
    // Add more books for the Mystery genre
  ],
  'Science Fiction': [
    { id: '5', title: 'Book 5', author: 'Author 5' },
    { id: '6', title: 'Book 6', author: 'Author 6' },
    // Add more books for the Science Fiction genre
  ],
  Romance: [
    { id: '7', title: 'Book 7', author: 'Author 7' },
    { id: '8', title: 'Book 8', author: 'Author 8' },
    // Add more books for the Romance genre
  ],
  Fantasy: [
    { id: '9', title: 'Book 9', author: 'Author 9' },
    { id: '10', title: 'Book 10', author: 'Author 10' },
    // Add more books for the Fantasy genre
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
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text>{item.title}</Text>
            <Text>Author: {item.author}</Text>
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
  },
  genreTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookItem: {
    marginBottom: 16,
    borderColor: 'red',
    borderWidth: 1,
    padding: 8,
  },
});

export default GenreScreen;
