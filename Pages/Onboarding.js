import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import Gif from "react-native-gif";

const Onboarding = ({ navigation }) => {
  const handleFinish = () => {
    // Navigate to the next screen (e.g., Home) after onboarding
    navigation.navigate("Home");
  };

  return (
    <Swiper loop={false} showsPagination={true}>
      {/* Slide 1 */}
      <View style={styles.slide}>
        <Gif
          style={styles.gif}
          source={require("./path_to_your_car.gif")} // Replace with your GIF source
          resizeMode="cover"
        />
        <Text style={styles.title}>Welcome to Onboarding</Text>
        <Text style={styles.description}>This is slide 1</Text>
      </View>

      {/* Slide 2 */}
      <View style={styles.slide}>
        <Text style={styles.title}>Explore Features</Text>
        <Text style={styles.description}>This is slide 2</Text>
      </View>

      {/* Slide 3 */}
      <View style={styles.slide}>
        <Text style={styles.title}>Get Started</Text>
        <Text style={styles.description}>This is slide 3</Text>
        <Text style={styles.finishButton} onPress={handleFinish}>
          Finish
        </Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  gif: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
  finishButton: {
    marginTop: 20,
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default Onboarding;
