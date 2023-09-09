import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const NewBookInfo = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Title and Author */}
        <Text style={styles.title}>Book Title</Text>
        <Text style={styles.author}>Author Name</Text>

        {/* Image Container */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/Images/4.png')} // Replace with the actual image path
            style={styles.bookImage}
          />
        </View>

        {/* Synopsis Header */}
        <Text style={styles.synopsisHeader}>Synopsis</Text>

        {/* Synopsis */}
        <View style={styles.synopsisContainer}>
          <Text style={styles.synopsisText}>
            Elspeth needs a monster. The monster might be her. Elspeth Spindle needs more than luck to stay safe in the eerie, mist-locked kingdom of Blunder—she needs a monster. She calls him the Nightmare, an ancient, mercurial spirit trapped in her head. He protects her. He keeps her secrets.

            But nothing comes for free, especially magic. When Elspeth meets a mysterious highwayman on the forest road, her life takes a drastic turn. Thrust into a world of shadow and deception, she joins a dangerous quest to cure Blunder from the dark magic infecting it. And the highwayman? He just so happens to be the King’s nephew, Captain of the most dangerous men in Blunder…and guilty of high treason.

            Together they must gather twelve Providence Cards—the keys to the cure. But as the stakes heighten and their undeniable attraction intensifies, Elspeth is forced to face her darkest secret yet: the Nightmare is slowly taking over her mind. And she might not be able to stop him.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
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
  
  imageContainer: {
    width: '80%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  
  bookImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  
  synopsisHeader: {
    fontSize: 20,
    fontFamily: 'Gordita-Bold',
    marginTop: 10,
  },
  
  synopsisContainer: {
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  
  synopsisText: {
    fontSize: 16,
    fontFamily: 'Gordita-Regular',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default NewBookInfo;
