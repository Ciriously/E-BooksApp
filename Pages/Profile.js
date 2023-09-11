import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import { ScrollView } from "react-native-gesture-handler";

const Profile = () => {
  const [fontsLoaded] = useFonts({
    "Gordita-Regular": require("../assets/fonts/Gordita-Regular.ttf"),
    "Gordita-Bold": require("../assets/fonts/Gordita-Bold.ttf"),
  });

  const [activeTab, setActiveTab] = useState("BooksILove");

  if (!fontsLoaded) {
    return null;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "BooksILove":
        return (
          <GridView
            items={[
              {
                title: "Book 1",
                author: "Author A",
                image: require("../assets/Images/1.png"),
              },
              {
                title: "Book 2",
                author: "Author B",
                image: require("../assets/Images/1.png"),
              },
              {
                title: "Book 3",
                author: "Author C",
                image: require("../assets/Images/1.png"),
              },
              // Add more books as needed
            ]}
          />
        );
      case "BooksIveRead":
        return (
          <GridView
            items={[
              {
                title: "Book A",
                author: "Author X",
                image: require("../assets/Images/1.png"),
              },
              {
                title: "Book B",
                author: "Author Y",
                image: require("../assets/Images/1.png"),
              },
              {
                title: "Book C",
                author: "Author Z",
                image: require("../assets/Images/1.png"),
              },
              // Add more books as needed
            ]}
          />
        );
      case "BooksIWillRead":
        return (
          <GridView
            items={[
              {
                title: "Book X",
                author: "Author 1",
                image: require("../assets/Images/1.png"),
              },
              {
                title: "Book Y",
                author: "Author 2",
                image: require("../assets/Images/1.png"),
              },
              {
                title: "Book Z",
                author: "Author 3",
                image: require("../assets/Images/1.png"),
              },
              // Add more books as needed
            ]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cover Picture */}
      <View style={styles.coverPic}>
        <Image
          source={require("../assets/cover.jpg")}
          style={styles.coverImage}
        />
      </View>

      <View style={styles.card}>
        {/* Profile Icon */}
        <View style={styles.profileIconContainer}>
          <Image
            source={require("../assets/icon2.png")}
            style={styles.profileIcon}
          />
        </View>

        {/* User Details */}
        <View style={styles.userDetails}>
          <Text style={styles.userName}>🥰Guddu</Text>
          <Text style={styles.userBio}>
            Gudiya's Guddu aka Aditya Mishra loves Reading books
          </Text>

          {/* Fields */}
          <View style={styles.fieldsContainer}>
            <View style={styles.field}>
              <Text style={styles.fieldNumber}>123</Text>
              <Text style={styles.fieldText}>Books Read</Text>
            </View>
            <View style={styles.field}>
              <Text style={styles.fieldNumber}>1</Text>
              <Text style={styles.fieldText}>Rank</Text>
            </View>
            <View style={styles.field}>
              <Text style={styles.fieldNumber}>1000</Text>
              <Text style={styles.fieldText}>Followers</Text>
            </View>
            <View style={styles.field}>
              <Text style={styles.fieldNumber}>200</Text>
              <Text style={styles.fieldText}>Following</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Profile Stats */}
      <View style={styles.profileStats}>
        {/* Tabs */}
        <View style={styles.tabContainer}>
          <Tab
            title="Books I Love"
            active={activeTab === "BooksILove"}
            onPress={() => setActiveTab("BooksILove")}
          />
          <Tab
            title="Books I've Read"
            active={activeTab === "BooksIveRead"}
            onPress={() => setActiveTab("BooksIveRead")}
          />
          <Tab
            title="Books I Will Read"
            active={activeTab === "BooksIWillRead"}
            onPress={() => setActiveTab("BooksIWillRead")}
          />
        </View>

        {/* Tab Content */}
        {renderTabContent()}
      </View>
    </ScrollView>
  );
};

const Tab = ({ title, active, onPress }) => (
  <TouchableOpacity
    style={[styles.tab, active && styles.activeTab]}
    onPress={onPress}
  >
    <Text style={active ? styles.activeTabText : styles.tabText}>{title}</Text>
  </TouchableOpacity>
);

// Inside the GridView component
const GridView = ({ items }) => (
  <View style={styles.gridContainer}>
    {items.map((item, index) => (
      <GridItem
        key={index}
        title={item.title}
        author={item.author}
        image={item.image}
      />
    ))}
  </View>
);

// Modify the GridItem component

const GridItem = ({ title, author, image }) => (
  <View style={styles.gridItem}>
    <ImageBackground source={image} style={styles.bookImage}>
      {/* Empty View to maintain height */}
      <View style={{ flex: 1 }} />
    </ImageBackground>

    {/* Text Container */}
    <View style={styles.textContainer}>
      <Text style={styles.bookTitle}>{title}</Text>
      <Text style={styles.bookAuthor}>{author}</Text>
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  coverPic: {
    height: 300,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
  },
  coverImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 20,
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 20,
    marginTop: -50,
    alignItems: "center",
    height: 250,
  },
  profileIconContainer: {
    position: "absolute",
    top: -75,
    left: "50%",
    backgroundColor: "#fff",
    borderRadius: 75,
    width: 130,
    height: 130,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateX: -50 }],
  },

  profileIcon: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  userName: {
    fontFamily: "Gordita-Bold",
    fontSize: 24,
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 90,
  },
  userBio: {
    fontFamily: "Gordita-Regular",
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  fieldsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  field: {
    alignItems: "center",
  },
  fieldNumber: {
    fontFamily: "Gordita-Bold",
    fontSize: 20,
  },
  fieldText: {
    fontFamily: "Gordita-Regular",
    fontSize: 14,
    color: "#777",
  },
  profileStats: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent", // Make the background transparent
    paddingVertical: 10,
    borderColor: "transparent", // Remove border color
  },
  tabText: {
    color: "#000",
    fontWeight: "bold",
  },
  activeTab: {
    borderColor: "pink",
    borderWidth: 2, // Add a border to the active tab
    borderRadius: 10, // Add border radius to make it square-like
  },
  activeTabText: {
    color: "pink",
    fontWeight: "bold",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    backgroundColor: "transparent", // Set the background to transparent
    borderRadius: 10,
    marginVertical: 10,
  },
  imageContainer: {
    width: "100%",
    height: 150,
    overflow: "hidden",
    borderRadius: 10,
  },
  bookImage: {
    width: "100%",
    height: 280,
    resizeMode: "contain",
    borderRadius: 10,
    overflow: "hidden",
  },
  textContainer: {
    backgroundColor: "#fff", // Semi-transparent background
    padding: 10,
  },
  bookTitle: {
    fontFamily: "Gordita-Bold",
    fontSize: 16,
    marginVertical: 5,
    color: "#000", // Text color for book title
  },
  bookAuthor: {
    fontFamily: "Gordita-Regular",
    fontSize: 14,
    color: "#000", // Text color for author name
  },
});

export default Profile;
