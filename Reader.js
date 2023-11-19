import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";

// Load custom fonts
Font.loadAsync({
  "EBGaramond-Bold": require("./assets/fonts/EBGaramond-Bold.ttf"),
  "EBGaramond-Regular": require("./assets/fonts/EBGaramond-Regular.ttf"),
  "EBGaramond-Italic": require("./assets/fonts/EBGaramond-Italic.ttf"),
  "EBGaramond-Medium": require("./assets/fonts/EBGaramond-Medium.ttf"),
});

// Import your back arrow image (replace 'backArrow.png' with your actual image file)
import BackArrowImage from "./assets/back.png";

const Reader = () => {
  const navigation = useNavigation();

  // Sample story with random text (for demonstration purposes)
  const story = `
    Once upon a time, in a land far, far away, there lived a brave knight named Sir Lancelot. He was known throughout the kingdom for his heroic deeds and unwavering courage.

    One day, a dragon terrorized the land, setting villages ablaze and causing great fear among the people. Sir Lancelot took it upon himself to confront the fearsome beast and save the kingdom.

    Armed with his trusty sword and clad in shining armor, Sir Lancelot set out on a perilous journey to find the dragon's lair. Along the way, he encountered challenges, faced dangerous creatures, and made new friends.

    After many trials and tribulations, Sir Lancelot finally reached the dragon's lair. A fierce battle ensued, with fire and fury on both sides. In the end, Sir Lancelot emerged victorious, having slain the dragon and saved the kingdom.

    The people hailed him as a true hero, and his name was celebrated for generations to come. Sir Lancelot's bravery and valor became legendary, and he lived happily ever after.
  `;

  // Calculate the total number of pages (for demonstration purposes, we'll assume 10 words per page)
  const wordsPerPage = 10;
  const totalWords = story.split(" ").length;
  const totalPages = Math.ceil(totalWords / wordsPerPage);

  // Page state and progress calculation
  const [currentPage, setCurrentPage] = useState(1);

  // Text size state
  const [textSize, setTextSize] = useState(16); // Initial text size (adjust as needed)

  // Calculate the progress percentage
  const progressPercentage = (currentPage / totalPages) * 100;

  // Function to increase text size
  const increaseTextSize = () => {
    setTextSize(textSize + 2); // Increase the text size by 2 units (adjust as needed)
  };

  // Function to decrease text size
  const decreaseTextSize = () => {
    if (textSize > 12) {
      // Minimum text size (adjust as needed)
      setTextSize(textSize - 2); // Decrease the text size by 2 units (adjust as needed)
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image source={BackArrowImage} style={styles.backButtonImage} />
        </TouchableOpacity>
        <Text style={styles.title}>She Gets the Girl</Text>
        <View style={styles.textSizeButtons}>
          <TouchableOpacity onPress={decreaseTextSize}>
            <Text style={styles.textSizeButton}>A-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={increaseTextSize}>
            <Text style={styles.textSizeButton}>A+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Story */}
      <ScrollView style={styles.storyContainer}>
        <Text style={{ ...styles.storyText, fontSize: textSize }}>{story}</Text>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <Text style={styles.chapterText}>Chapter 1</Text>
          <Text style={styles.titleText}>The Adventure Begins</Text>
        </View>
        <View style={styles.footerRight}>
          <Text style={styles.pageInfo}>Page {currentPage}</Text>
          <View style={styles.progressBarContainer}>
            <View
              style={[
                styles.progressBar,
                { width: `${progressPercentage}%`, backgroundColor: "#6F00FF" },
              ]}
            ></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    backgroundColor: "#fff",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    paddingHorizontal: 8,
    marginLeft: -18, // Adjust the margin as needed
    marginTop: 20, // Adjust the margin as needed
  },
  backButtonImage: {
    width: 24,
    height: 24,
    resizeMode: "contain", // Adjust the resizeMode as needed
  },
  title: {
    fontSize: 24,
    marginTop: 18,
    fontFamily: "EBGaramond-Bold",
    marginLeft: 12, // Adjust the margin as needed
  },
  storyContainer: {
    marginTop: 16,
    flex: 1,
  },
  storyText: {
    lineHeight: 24,
    fontFamily: "EBGaramond-Regular",
  },
  footer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: 16,
    paddingHorizontal: 5,
    paddingBottom: 16,
    backgroundColor: "#EEEDF9A6",
  },
  footerLeft: {
    flex: 1,
  },
  chapterText: {
    fontSize: 18,
    fontFamily: "EBGaramond-Bold",
  },
  titleText: {
    fontSize: 14,
    fontFamily: "EBGaramond-Regular",
    color: "#7E7D8C",
  },
  footerRight: {
    alignItems: "flex-end",
  },
  pageInfo: {
    fontSize: 16,
    fontFamily: "Gordita-Medium",
    marginTop: 1,
  },
  progressBarContainer: {
    height: 4,
    width: Dimensions.get("window").width * 0.3, // Adjust the width as needed
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginTop: 10,
  },
  progressBar: {
    height: 4,
    borderRadius: 5,
  },
  textSizeButtons: {
    flexDirection: "row",
    marginLeft: "auto", // Push the buttons to the right side of the header
    marginTop: 18, // Adjust the margin as needed
  },
  textSizeButton: {
    fontSize: 18,
    marginHorizontal: 1,
  },
});

export default Reader;
