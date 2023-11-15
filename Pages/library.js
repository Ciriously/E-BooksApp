import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Swiper from "react-native-swiper";
import * as Font from "expo-font";

// Load custom fonts
Font.loadAsync({
  "Gordita-Regular": require("../assets/fonts/Gordita-Regular.ttf"),
  "Gordita-Bold": require("../assets/fonts/Gordita-Bold.ttf"),
  "EBGaramond-Italic": require("../assets/fonts/EBGaramond-Italic.ttf"),
  "EBGaramond-Medium": require("../assets/fonts/EBGaramond-Medium.ttf"),
});

const Onboarding = ({ navigation }) => {
  const handleFinish = () => {
    // Navigate to the next screen (e.g., Home) after onboarding
    navigation.navigate("Home");
  };

  const handleSkip = () => {
    // Navigate to the next screen (e.g., Home) directly
    navigation.navigate("Home");
  };

  return (
    <Swiper loop={false} showsPagination={true}>
      {/* Slide 1 */}
      <View style={styles.slide}>
        <Image
          source={require("../assets/slide1.jpg")}
          style={styles.backgroundImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            “A reader lives a thousand lives before he dies . . . The man who
            never reads lives only one.”
          </Text>
          <Text style={styles.description}>-George R.R. Martin</Text>
        </View>
      </View>

      {/* Slide 2 */}
      <View style={styles.slide}>
        <Image
          source={require("../assets/slide2.jpg")}
          style={styles.backgroundImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title2}>Explore Features</Text>
          <Text style={styles.description2}>This is slide 2</Text>
        </View>
      </View>

      {/* Slide 3 */}
      <View style={styles.slide}>
        <Image
          source={require("../assets/slide3.jpg")}
          style={styles.backgroundImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title3}>Get Started</Text>
          <Text style={styles.description3}>This is slide 3</Text>
          <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
            <Text>Finish</Text>
          </TouchableOpacity>
          {/* Skip Button inside the third screen */}
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  textContainer: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.0)",
    padding: 20,
    borderRadius: 10,
    top: "30%",
  },
  title: {
    fontSize: 24,
    fontFamily: "Gordita-Bold",
    marginBottom: 20,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Gordita-Regular",
    color: "#fff",
  },
  title2: {
    fontSize: 24,
    fontFamily: "Gordita-Bold",
    marginBottom: 20,
    color: "#fff",
  },
  description2: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Gordita-Regular",
    color: "#fff",
  },
  title3: {
    // Add styles for slide 3 title
  },
  description3: {
    // Add styles for slide 3 description
  },
  finishButton: {
    marginTop: 20,
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline",
  },
  skipButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
  },
  skipButtonText: {
    color: "#000",
  },
});

export default Onboarding;
