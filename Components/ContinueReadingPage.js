import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Import local images
const book1Image = require("../assets/Books/Romance/1.jpg");
const book2Image = require("../assets/Books/3.jpg");
const book3Image = require("../assets/Images/3.png");
const book4Image = require("../assets/Images/4.png");

const tabs = [
  {
    id: "1",
    title: "Tab 2",
    leftColor: "#FFFDD0",
    rightColor: "#fff",
    bookTitle: "She Gets The Girl",
    authorName: "Alyson Derrick and Rachael Lippincott",
    progress: 0.4,
    image: book1Image,
  },
  {
    id: "2",
    title: "Tab 1",
    leftColor: "#B6D0E2",
    rightColor: "#fff",
    bookTitle: "Nobody Knows But You",
    authorName: "Anica Mrose Rissi",
    progress: 0.7,
    image: book2Image,
  },

  {
    id: "3",
    title: "Tab 3",
    leftColor: "#F5EABD",
    rightColor: "#fff",
    bookTitle: "Book C",
    authorName: "Author Z",
    progress: 0.2,
    image: book3Image,
  },
  {
    id: "4",
    title: "Tab 4",
    leftColor: "pink",
    rightColor: "#fff",
    bookTitle: "Book D",
    authorName: "Author W",
    progress: 0.9,
    image: book4Image,
  },
];

const TabList = () => {
  const navigation = useNavigation();

  const handleContinuePress = (item) => {
    // Navigate to the "Reader" screen and pass the selected item
    navigation.navigate("Reader", { item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Continue Reading</Text>
      <FlatList
        data={tabs}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.tab}
            onPress={() => handleContinuePress(item)}
          >
            <View
              style={[styles.leftSection, { backgroundColor: item.leftColor }]}
            >
              <Image source={item.image} style={styles.bookImage} />
            </View>
            <View
              style={[
                styles.rightSection,
                { backgroundColor: item.rightColor },
              ]}
            >
              <Text style={styles.bookTitle}>{item.bookTitle}</Text>
              <Text style={styles.authorName}>{item.authorName}</Text>
              {/* Custom Progress Bar */}
              <View style={styles.progressBarContainer}>
                <View
                  style={[
                    styles.progressBar,
                    { width: `${item.progress * 100}%` },
                  ]}
                />
              </View>
              <TouchableOpacity
                style={styles.continueButton}
                onPress={() => handleContinuePress(item)}
              >
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
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
    marginTop: 210,
    backgroundColor: "#fff",
    marginRight: -40,
    marginLeft: -10,
  },
  title: {
    fontFamily: "Gordita-Bold",
    fontSize: 24,
    marginBottom: 10,
    paddingLeft: 10,
  },
  tab: {
    backgroundColor: "transparent",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
    height: 200,
    width: 290,
    flexDirection: "row",
    alignItems: "center",
  },
  leftSection: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  rightSection: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  bookImage: {
    width: 90,
    height: 140,
    resizeMode: "contain",
  },
  bookTitle: {
    fontFamily: "Gordita-Bold",
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  authorName: {
    fontFamily: "Gordita-Regular",
    fontSize: 14,
    color: "black",
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    marginTop: 5,
  },
  progressBar: {
    height: "100%",
    borderRadius: 5,
    backgroundColor: "#6F00FF", // Change the color of the progress bar
  },
  continueButton: {
    backgroundColor: "white",
    borderColor: "#404066",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#404066",
    fontFamily: "Gordita-Medium",
    fontSize: 14,
  },
});

export default TabList;
