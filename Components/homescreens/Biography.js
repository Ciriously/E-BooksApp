import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const biographyData = [
  {
    id: "1",
    title: "Steve Jobs",
    author: "Walter Isaacson",
    imageUrl: require("../../assets/Books/Bio/1.jpg"),
  },
  {
    id: "2",
    title: "Alexander Hamilton",
    author: "Ron Chernow",
    imageUrl: require("../../assets/Books/Bio/2.jpg"),
  },
  {
    id: "3",
    title: "Frida",
    author: "Bárbara Mujica",
    imageUrl: require("../../assets/Books/Bio/3.jpg"),
  },
];

const Biography = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigateToBookInfo(item)}
    >
      <Image source={item.imageUrl} style={styles.bookImage} />
      <View style={styles.bookTitleContainer}>
        <Text style={styles.bookTitle}>{item.title}</Text>
      </View>
      <Text style={styles.bookAuthor}>{item.author}</Text>
    </TouchableOpacity>
  );

  const navigateToBookInfo = (book) => {
    navigation.navigate("NewBookInfo", { book });
  };

  const handleAllPress = () => {
    // Navigate to a screen displaying all biography books
    // You may need to create a new screen component for displaying all books
    // and navigate to that screen here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Biography</Text>
        <TouchableOpacity style={styles.allButton} onPress={handleAllPress}>
          <Text style={styles.allButtonText}>All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={biographyData}
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
    marginLeft: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontFamily: "Gordita-Bold",
    fontSize: 24,
  },
  allButton: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  allButtonText: {
    color: "#6F00FF",
    fontFamily: "Gordita-Bold",
  },
  itemContainer: {
    marginRight: 20,
  },
  bookImage: {
    width: 120,
    height: 180,
    resizeMode: "cover",
    borderRadius: 8,
  },
  bookTitleContainer: {
    flexWrap: "wrap",
    width: 100,
  },
  bookTitle: {
    fontFamily: "Gordita-Bold",
    fontSize: 14,
    marginTop: 5,
    marginLeft: 1,
    maxWidth: 120,
  },
  bookAuthor: {
    fontFamily: "Gordita-Regular",
    fontSize: 14,
    color: "gray",
    marginLeft: 0,
  },
});

export default Biography;
