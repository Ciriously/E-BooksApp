import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Swiper from "react-native-swiper";
import * as Font from "expo-font";

// Load custom fonts
Font.loadAsync({
  "Gordita-Regular": require("../assets/fonts/Gordita-Regular.ttf"),
  "Gordita-Bold": require("../assets/fonts/Gordita-Bold.ttf"),
  "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
  "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
  "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
});

const Onboarding = ({ navigation }) => {
  // Load custom fonts
  const [fontsLoaded] = Font.useFonts({
    "Gordita-Bold": require("../assets/fonts/Gordita-Bold.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Render nothing while fonts are loading
  }

  const handleFinish = () => {
    // Navigate to the next screen (e.g., Home) after onboarding
    navigation.navigate("Home");
  };

  const handleSkip = () => {
    // Navigate to the next screen (e.g., Home) directly
    navigation.navigate("Home");
  };

  const handleGetStarted = () => {
    // Navigate to the next screen (e.g., Home) after onboarding
    navigation.navigate("Login");
  };

  return (
    <Swiper
      loop={true}
      showsPagination={true}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
    >
      {/* Slide 1 */}
      <View style={styles.slide}>
        <Image
          source={require("../assets/1.png")}
          style={styles.backgroundImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome to Wordy Odyssey!</Text>
          <Text style={styles.description}>
            Embark on a literary journey with Wordy Odyssey, where each page is
            a new adventure waiting to be explored. Let the words take you on a
            magical odyssey of imagination and discovery.
          </Text>
        </View>
        <TouchableOpacity style={styles.skipButtonTop} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Slide 2 */}
      <View style={styles.slide}>
        <Image
          source={require("../assets/slide2.png")}
          style={styles.backgroundImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title2}>Your Personal Reading Haven</Text>
          <Text style={styles.description2}>
            Create your own sanctuary of serenity with Wordy Odyssey. Dive into
            your favorite books anytime, anywhere. Immerse yourself in the joy
            of reading with our user-friendly interface and customizable reading
            settings. Your reading haven awaits!
          </Text>
        </View>
        <TouchableOpacity style={styles.skipButtonTop} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Slide 3 */}
      <View style={styles.slide}>
        <Image
          source={require("../assets/slide3.png")}
          style={styles.backgroundImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title3}>Join the Wordy Community</Text>
          <Text style={styles.description3}>
            Connect with fellow book enthusiasts! Share your thoughts, discover
            hidden gems, and build a community of like-minded readers. Wordy
            Odyssey is not just an app; it's a social hub for the love of words.
          </Text>
        </View>
        <TouchableOpacity style={styles.skipButtonTop} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
      {/* Slide 4 */}
      <View style={styles.slide}>
        <Image
          source={require("../assets/slide4.png")}
          style={styles.backgroundImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title4}>Ready to Begin?</Text>
          <Text style={styles.description4}>
            Congratulations! You're now set to embark on your Wordy Odyssey.
            Start exploring, start reading, and let the words guide you on an
            epic adventure. Happy reading!
          </Text>

          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={handleGetStarted}
          >
            <Text style={styles.getStartedButtonText}>Get Started</Text>
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
    backgroundColor: "#fff",
    justifyContent: "center",
    position: "relative", // Ensure the skip button is positioned relative to the slide
  },
  backgroundImage: {
    width: "80%", // Adjust the size as needed
    height: "80%", // Adjust the size as needed
    marginBottom: 120,
    resizeMode: "contain", // Ensure the image maintains its aspect ratio
  },
  textContainer: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.0)",
    padding: 10,
    borderRadius: 10,
    position: "absolute",
    bottom: 130, // Position at the bottom
    width: "100%", // Take up the full width
  },
  title: {
    fontSize: 24,
    fontFamily: "Inter-Medium",
    marginBottom: 10, // Adjusted margin
    color: "#662d91",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Inter-Regular",
    marginBottom: 10, // Adjusted margin
    color: "gray",
  },
  title2: {
    fontSize: 24,
    fontFamily: "Gordita-Bold",
    marginBottom: 10, // Adjusted margin
    color: "#89CFF0",
  },
  description2: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Gordita-Regular",
    color: "gray",
  },
  title3: {
    fontSize: 24,
    fontFamily: "Gordita-Bold",
    marginBottom: 10, // Adjusted margin
    color: "#DDA0DD",
  },
  description3: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Gordita-Regular",
    color: "gray",
  },
  title4: {
    fontSize: 24,
    fontFamily: "Gordita-Bold",
    marginBottom: 10, // Adjusted margin
    color: "#FF4500",
  },
  description4: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Gordita-Regular",
    color: "gray",
    marginBottom: -32.6,
  },
  skipButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 1,
  },
  skipButtonTop: {
    position: "absolute",
    top: 30,
    right: 20,
    zIndex: 1,
  },
  skipButtonText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Gordita-Regular",
  },
  getStartedButton: {
    marginTop: 10,
    fontSize: 18,
    width: 200,
    height: 50,
    top: 90,
    backgroundColor: "#FF69B4",
    padding: 10,
    borderRadius: 15,
  },
  getStartedButtonText: {
    color: "#fff",
    fontFamily: "Inter-Bold",
    textAlign: "center",
    fontSize: 18,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
    backgroundColor: "darkgray",
  },
  activeDot: {
    width: 17,
    height: 12,
    borderRadius: 6,
    margin: 3,
    backgroundColor: "black",
  },
});

export default Onboarding;
