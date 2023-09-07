import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';

const data = {
  "Popular Now": [
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
      imageUrl: require('../assets/Images/2.png'),
    },
  ],
  "Mystery": [
    {
      id: '3',
      title: 'Book 3',
      author: 'Author 3',
      imageUrl: require('../assets/Images/3.png'),
    },
    {
      id: '4',
      title: 'Book 4',
      author: 'Author 4',
      imageUrl: require('../assets/Images/4.png'),
    },
  ],
  "Science Fiction": [
    {
      id: '5',
      title: 'Book 5',
      author: 'Author 5',
      imageUrl: require('../assets/Images/5.png'),
    },
    {
      id: '6',
      title: 'Book 6',
      author: 'Author 6',
      imageUrl: require('../assets/Images/6.png'),
    },
  ],
  // Add more sections and books as needed
};

const PopularNow = () => {
  const [activeCategory, setActiveCategory] = useState('Popular Now');

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.imageUrl} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Text style={styles.bookAuthor}>{item.author}</Text>
    </View>
  );

  const renderSection = (category) => {
    const sectionData = data[category];

    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{category}</Text>
        <FlatList
          data={sectionData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Now</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryTabs}
      >
        {Object.keys(data).map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.tab,
              activeCategory === category && styles.activeTab,
            ]}
            onPress={() => setActiveCategory(category)}
          >
            <Text
              style={[
                styles.tabText,
                activeCategory === category && styles.activeTabText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {renderSection(activeCategory)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontFamily: 'Gordita-Bold',
    fontSize: 24,
    marginBottom: 10,
    marginLeft: 20,
  },
  categoryTabs: {
    marginLeft: 20,
  },
  tab: {
    marginRight: 10,
    padding: 10,
    backgroundColor: 'white', // Change tab background color to light pink
    borderRadius: 20, // Add border radius to tabs
  },
  activeTab: {
    backgroundColor: 'lightpink',
    borderRadius: 20, // Add border radius to active tab
  },
  tabText: {
    color: '#000',
    fontWeight: 'medium', // Change to 'medium' for non-active tabs
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold', // Change to 'bold' for active tab
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: 'Gordita-Bold',
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 20,
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
