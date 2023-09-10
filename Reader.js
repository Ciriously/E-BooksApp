import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";

// Load custom fonts
Font.loadAsync({
  "EBGaramond-Bold": require("../assets/fonts/EBGaramond-Bold.ttf"),
  "EBGaramond-Regular": require("../assets/fonts/EBGaramond-Regular.ttf"),
  "EBGaramond-Italic": require("../assets/fonts/EBGaramond-Italic.ttf"),
  "EBGaramond-Medium": require("../assets/fonts/EBGaramond-Medium.ttf"),
});

const Reader = () => {
  const navigation = useNavigation();

  // Sample story with 250 words
  const story = `
   Mr and Mrs Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense.

Mr. Dursley was the director of a firm called Grunnings, which made drills. He was a big, beefy man with hardly any neck, although he did have a very large moustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbours. The Dursleys had a small son called Dudley and in their opinion there was no finer boy anywhere.

On his way to work, Vernon Dursley notices strange events: a cat on Privet Drive appears to be reading a map, and people wearing colourful robes are wandering the streets. Mr Dursley attempts to ignore these oddities, but he sees more curiously-clad people during his lunch break. He overhears some mentioning the Potters and their son, Harry; one even stops Mr Dursley, telling him that he must be overjoyed that "You Know Who" is gone. All this reminds Vernon that the Dursleys have a shameful secret and why they pretend the Potters never existed. Arriving home, Mr Dursley hears TV news reports about unforeseen shooting stars and owls flying during the daytime. Previously unwilling to discuss the Potters with his wife, Petunia, he finally verifies that their nephew's name is Harry. Vernon Dursley sleeps uneasily.

Late that night, a mysterious figure appears on Privet Drive. Albus Dumbledore, a wizard, uses an object called a Put-Outer to extinguish all the street lamps. Dumbledore addresses the cat, who transforms into a witch named Professor McGonagall. They discuss how recent celebrations have left "Muggles" inquisitive. Dumbledore confirms that James and Lily Potter were murdered the night before (October 31) by the Dark wizard, Lord Voldemort. He also tried to kill their one-year-old son, Harry, who is somehow involved in causing the Dark Lord's demise. Voldemort is often called "You-Know-Who" by those fearing to speak his name. According to Dumbledore, Harry is being brought to Privet Drive by Hagrid.

Soon after, the gigantic Hagrid arrives on a flying motorbike with a snugly wrapped baby tucked into his arm. Dumbledore places the infant on Number Four's doorstep with a letter addressed to Petunia Dursley. McGonagall despairs that baby Harry, an instant celebrity, must spend his childhood with such people. Hagrid re-mounts his motorcycle, McGonagall transforms back into a cat, and Dumbledore re-illuminates the streetlights; all three quietly depart.
  `;

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>

      {/* Title Text */}
      <Text style={styles.title}>The Boy Who Lived</Text>

      {/* Story */}
      <ScrollView style={styles.storyContainer}>
        <Text style={styles.storyText}>{story}</Text>
      </ScrollView>
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
  },
  backButtonText: {
    color: "#007AFF",
    fontSize: 18,
  },
  title: {
    fontSize: 32,
    marginTop: 16,
    fontFamily: "EBGaramond-Bold",
    marginLeft: 60,
  },
  storyContainer: {
    marginTop: 16,
    flex: 1,
  },
  storyText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "EBGaramond-Regular",
  },
});

export default Reader;
