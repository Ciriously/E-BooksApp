import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const NewBookInfo = () => {
  return (
    <View style={styles.container}>
      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/Images/1.png')} // Replace with the actual image path
          style={styles.bookImage}
        />
      </View>

      {/* Text Container */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Book Title</Text>
        <Text style={styles.author}>Author Name</Text>
        <Text style={styles.description}>
          This is a brief description of the book. You can replace this with the actual book description.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  bookImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Gordita-Bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    fontFamily: 'Gordita-Regular',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Gordita-Regular',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default NewBookInfo;
