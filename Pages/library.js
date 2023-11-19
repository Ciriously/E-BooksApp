import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const quotesData = [
  {
    id: 1,
    book: "Book 1",
    author: "Author 1",
    quote: "This is the first quote from Book 1.",
  },
  {
    id: 2,
    book: "Book 2",
    author: "Author 2",
    quote: "This is the second quote from Book 2.",
  },
  // Add more quotes as needed
];

const RandomQuoteGenerator = () => {
  const [randomQuote, setRandomQuote] = useState({});

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setRandomQuote(quotesData[randomIndex]);
  };

  const handleLogoPress = () => {
    // Generate random quote when the logo is pressed
    generateRandomQuote();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Random Quote Generator</Text>
        <TouchableOpacity onPress={handleLogoPress}>
          <Image source={require("../assets/reload.png")} style={styles.logo} />
        </TouchableOpacity>
      </View>
      {randomQuote.id && (
        <View style={styles.quoteContainer}>
          <Text style={styles.quote}>{`"${randomQuote.quote}"`}</Text>
          <Text
            style={styles.author}
          >{`- ${randomQuote.author}, ${randomQuote.book}`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "Gordita-Bold",
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  quoteContainer: {
    alignItems: "center",
  },
  quote: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  author: {
    fontSize: 14,
    color: "gray",
  },
});

export default RandomQuoteGenerator;
