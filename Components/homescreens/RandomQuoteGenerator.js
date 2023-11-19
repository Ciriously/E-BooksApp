import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const quotesData = [
  {
    id: 1,
    book: "To Kill a Mockingbird",
    author: "Harper Lee",
    quote:
      "You never really understand a person until you consider things from his point of view... Until you climb into his skin and walk around in it.",
  },
  {
    id: 2,
    book: "1984",
    author: "George Orwell",
    quote: "War is peace. Freedom is slavery. Ignorance is strength.",
  },
  {
    id: 3,
    book: "Pride and Prejudice",
    author: "Jane Austen",
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  },
  {
    id: 4,
    book: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    quote:
      "So we beat on, boats against the current, borne back ceaselessly into the past.",
  },
  {
    id: 5,
    book: "The Catcher in the Rye",
    author: "J.D. Salinger",
    quote:
      "What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it.",
  },
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
      <View style={styles.boxContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Random Quote</Text>
          <TouchableOpacity onPress={handleLogoPress}>
            <Image
              source={require("../../assets/reload.png")}
              style={styles.logo}
            />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "left",
    alignItems: "left",
  },
  boxContainer: {
    backgroundColor: "#F4F7F8",
    marginBottom: 23,
    marginTop: 20,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    width: "100%", // Adjust the width as needed
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
    fontFamily: "poppins-Medium",
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  quoteContainer: {
    alignItems: "center",
  },
  quote: {
    fontSize: 24,
    marginVertical: 10,
    textAlign: "left",
    fontFamily: "EBGaramond-Regular",
    marginBottom: 10,
    marginTop: 0,
  },
  author: {
    fontSize: 14,
    color: "gray",
    fontFamily: "EBGaramond-Regular",
  },
});

export default RandomQuoteGenerator;
