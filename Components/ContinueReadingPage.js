import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const data = [
  { id: '1', title: 'Book 1' },
  { id: '2', title: 'Book 2' },
  { id: '3', title: 'Book 3' },
  { id: '4', title: 'Book 4' },
  { id: '5', title: 'Book 5' },
  // Add more books to the data array as needed
];

const ContinueReadingPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Continue Reading</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2} // Set the number of columns in the grid
        renderItem={({ item }) => (
          <View style={styles.gridItem}>
            <Text>{item.title}</Text>
            {/* Add book cover image or other content here */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  gridItem: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150, // Set a minimum height for grid items
  },
});

export default ContinueReadingPage;
