import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";

const Onboarding = ({ navigation }) => {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
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

  return (
    <View style={styles.container}>
      {/* Top Centered Image */}
      <Image source={require("../assets/icon2.png")} style={styles.icon} />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome Back, Aditya</Text>

      {/* Finish Button */}
      <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
        <Text style={styles.finishButtonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: "Gordita-Bold",
    marginBottom: 20,
  },
  finishButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  finishButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Gordita-Bold",
  },
});

export default Onboarding;
