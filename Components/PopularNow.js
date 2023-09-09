import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';

const data = {
  "Best Sellers": [
    {
      id: '1',
      title: 'if You Could See the Sun',
      author: 'Ann liang',
      imageUrl: require('../assets/Books/Fiction/8.jpg'),
    },
    {
      id: '3',
      title: 'Book 2',
      author: 'Author 2',
      imageUrl: require('../assets/Books/1.jpg'),
    },
    {
      id: '4',
      title: 'Book 2',
      author: 'Author 2',
      imageUrl: require('../assets/Books/2.jpg'),
    },  {
      id: '5',
      title: 'Book 2',
      author: 'Author 2',
      imageUrl: require('../assets/Books/3.jpg'),
    },  {
      id: '6',
      title: 'Book 2',
      author: 'Author 2',
      imageUrl: require('../assets/Books/4.jpg'),
    },
  ],
  'fiction': [
    {
      id: '3',
      title: 'Book 3',
      author: 'Author 3',
      imageUrl: require('../assets/Books/Fiction/1.jpg'),
    },
    {
      id: '4',
      title: 'Book 4',
      author: 'Author 4',
      imageUrl: require('../assets/Books/Fiction/2.jpg'),
    },

    {
      id: '5',
      title: 'Book 4',
      author: 'Author 4',
      imageUrl: require('../assets/Books/Fiction/3.jpg'),
    },

    {
      id: '6',
      title: ' 4',
      author: 'Author 4',
      imageUrl: require('../assets/Books/Fiction/4.jpg'),
    },

    {
      id: '7',
      title: 'Book 4',
      author: 'Author 4',
      imageUrl: require('../assets/Books/Fiction/5.jpg'),
    },

    {
      id: '8',
      title: 'Book 4',
      author: 'Author 4',
      imageUrl: require('../assets/Books/Fiction/6.jpg'),
    },

    {
      id: '9',
      title: 'Book 4',
      author: 'Author 4',
      imageUrl: require('../assets/Books/Fiction/7.jpg'),
    },


    {
      id: '10',
      title: 'Book 4',
      author: 'Author 4',
      imageUrl: require('../assets/Books/Fiction/8.jpg'),
    },



  ],
  "Romance": [
    {
      id: '11',
      title: 'Book 5',
      author: 'Author 5',
      imageUrl: require('../assets/Books/Romance/1.jpg'),
    },
    {
      id: '12',
      title: 'Book 6',
      author: 'Author 6',
      imageUrl: require('../assets/Books/Romance/2.jpg'),
    },
  ],
  // Add more sections and books as needed
};

const PopularNow = () => {
  const [activeCategory, setActiveCategory] = useState('Popular Now');

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.imageUrl} style={styles.bookImage} />
      <View style={styles.bookTitleContainer}>
        <Text style={styles.bookTitle}>{item.title}</Text>
      </View>
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
    marginLeft: 0,
    
  },
  title: {
    fontFamily: 'Gordita-Bold',
    fontSize: 24,
    marginBottom: 10,
    marginLeft: 10,
  },
  categoryTabs: {
    marginLeft: 8,
    marginBottom: 10,
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
    marginLeft: 10,
  },
  itemContainer: {
    marginRight: 20,
  },
  bookImage: {
    width: 120,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 8,
    marginLeft: 10,
  },
 bookTitleContainer: {
  flexWrap: 'wrap',
  width: 100, // Set a specific width for the container
  marginLeft: 10,
},
bookTitle: {
  fontFamily: 'Gordita-Bold',
  fontSize: 14,
  marginTop: 5,
  marginLeft: 1,
  maxWidth: 120, // Set a maximum width for the text
},


  bookAuthor: {
    fontFamily: 'Gordita-Regular',
    fontSize: 14,
    color: 'gray',
    marginLeft: 10,
  },
});

export default PopularNow;
