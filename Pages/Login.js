import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";

const Onboarding = ({ navigation }) => {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    "Gordita-Bold": require("../assets/fonts/Gordita-Bold.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Render nothing while fonts are loading
  }

  const handleFinish = () => {
    // Navigate to the next screen (e.g., Home) after onboarding
    navigation.navigate("Home");
  };

  const handleLogin = () => {
    // Navigate to the Register screen
    navigation.navigate("Register");
  };

  return (
    <View style={styles.screenContainer}>
      {/* Logo and Brand Name Container */}
      <View style={styles.logoContainer}>
        {/* Logo */}
        <Image source={require("../assets/logo.png")} style={styles.logo} />

        {/* Brand Name */}
        <Text style={styles.brandName}>Wordy Odyssey</Text>
      </View>

      <View style={styles.container}>
        {/* Top Centered Image */}
        <Image source={require("../assets/login.png")} style={styles.icon} />

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Welcome Back, Aditya !</Text>

        {/* Description Text */}
        <Text style={styles.descriptionText}>
          Explore the world of words and imagination with Wordy Odyssey. Sign in
          to begin your literary journey!
        </Text>

        {/* Sign In Button */}
        <TouchableOpacity
          style={[styles.finishButton, styles.button]}
          onPress={handleFinish}
        >
          <Text style={styles.finishButtonText}>LOGIN</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.loginButton, styles.button]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginTop: 20,
  },
  brandName: {
    fontSize: 20,
    fontFamily: "poppins-SemiBold",
    marginTop: 25,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  icon: {
    width: 400,
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: "poppins-ExtraBold",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    fontFamily: "poppins-Medium",
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 40,
    color: "gray", // Adjust color as needed
  },
  button: {
    width: "80%", // Set the width to 80% of the container
    borderRadius: 5,
    marginTop: 10, // Add margin to the top
    marginBottom: 10, // Add margin between buttons
  },
  finishButton: {
    backgroundColor: "blue",
    padding: 10,
    borderWidth: 1, // Add border
    borderColor: "blue", // Border color
    alignItems: "center",
  },
  finishButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "poppins-SemiBold",
  },
  loginButton: {
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderColor: "blue",
  },
  loginButtonText: {
    color: "blue",
    fontSize: 16,
    fontFamily: "poppins-SemiBold",
    textAlign: "center",
  },
});

export default Onboarding;
