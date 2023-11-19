import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const libraryData = [
  {
    id: "1",
    title: "That Summer Feeling",
    author: "Bridget Morrisey",
    imageUrl: require("../assets/Books/Romance/3.jpg"),
    description:
      "When a divorced woman attends a sleepaway camp for adults, she reconnects with a man from her past—only to fall head over heels for his sister instead",
  },
  {
    id: "2",
    title: "I fell in Love with Hope",
    author: "Lancel",
    imageUrl: require("../assets/Books/sh/1.jpg"),
    description:
      "Against the unforgiving landscape of a hospital, I fell in love with a mischievous, sun-eyed boy who became my only joy in that desolate place.",
  },
  {
    id: "3",
    title: "The Body in the Library",
    author: "Agatha Christe",
    imageUrl: require("../assets/Books/mystery/2.jpg"),
    description:
      "It’s seven in the morning. The Bantrys wake to find the body of a young woman in their library. She is wearing evening dress and heavy make-up, which is now smeared across her cheeks.",
  },
  {
    id: "4",
    title: "Murder on the Orient Express",
    author: "Agatha Christe",
    imageUrl: require("../assets/Books/mystery/3.jpg"),
    description:
      "An American tycoon lies dead in his compartment, stabbed a dozen times, his door locked from the inside. Isolated and with ...",
  },
  {
    id: "5",
    title: "She Gets The Girl",
    author: "Agatha Christe",
    imageUrl: require("../assets/Books/Romance/1.jpg"),
    description:
      "She’s All That meets What If It’s Us in this swoon-worthy hate-to-love YA romantic comedy from #1 New York Times bestselling coauthor of Five Feet Apart Rach...",
  },
  {
    id: "6",
    title: "harry potter and The Order of the Phoenix",
    author: "Jk Rowling",
    imageUrl: require("../assets/Books/Fiction/6.jpg"),
    description:
      "Now in his fifth year at Hogwarts, Harry learns that many in the wizarding community do not know the truth of his encounter ...",
  },
];

const Library = () => {
  const renderItem = ({ item }) => (
    <View style={styles.bookContainer}>
      <Image source={item.imageUrl} style={styles.bookImage} />
      <View style={styles.bookInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>My Books 📚</Text>
      <FlatList
        data={libraryData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  pageTitle: {
    fontFamily: "poppins-SemiBold",
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
  },
  bookContainer: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 2,
    overflow: "hidden", // Clip content that overflows the borderRadius
  },
  bookImage: {
    width: 135,
    height: 180,
    resizeMode: "contain",
    borderRadius: 8,
    marginRight: 10,
  },

  bookInfo: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontFamily: "poppins-SemiBold",
    fontSize: 18,
    marginBottom: 5,
  },
  author: {
    fontFamily: "Gordita-Regular",
    fontSize: 16,
    textDecorationLine: "underline",
    marginBottom: 5,
    color: "#000",
  },
  description: {
    fontFamily: "Gordita-Regular",
    fontSize: 14,
    color: "gray",
  },
});

export default Library;
