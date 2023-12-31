import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import ContinueReadingPage from "../Components/ContinueReadingPage";
import PopularNow from "../Components/PopularNow";
import Biography from "../Components/homescreens/Biography";
import BestSelfHelp from "../Components/homescreens/BestSelfHelp";
import RandomQuoteGenerator from "../Components/homescreens/RandomQuoteGenerator";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  const [fontsLoaded] = useFonts({
    "Gordita-Regular": require("../assets/fonts/Gordita-Regular.ttf"),
    "Gordita-Bold": require("../assets/fonts/Gordita-Bold.ttf"),
  });

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return null;
  }

  const goToProfilePage = () => {
    navigation.navigate("Profile"); // Replace 'Profile' with your actual profile screen name
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navLeft}>
          <Text style={styles.greetingText}>
            <Text style={styles.helloText}>Hello,</Text>
            <Text style={styles.adiText}> Adi!</Text>
          </Text>
        </View>

        <View style={styles.navRight}>
          <TouchableOpacity onPress={goToProfilePage}>
            <Image
              source={require("../assets/icon2.png")}
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search for a book"
          placeholderTextColor="gray"
          style={styles.searchInput}
        />
        <Image
          source={require("../assets/search-icon.png")}
          style={styles.searchIcon}
        />
      </View>
      <ContinueReadingPage />
      <PopularNow />
      <Biography />
      <BestSelfHelp />
      <RandomQuoteGenerator />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    marginTop: 3,
  },
  title: {
    fontFamily: "Gordita-Bold",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  navbar: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 30,
  },
  navLeft: {
    flex: 1,
  },
  navRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  greetingText: {
    flexDirection: "row",
    alignItems: "baseline", // Align text at the baseline
  },

  helloText: {
    fontSize: 38,
    fontFamily: "Gordita-Regular",
    color: "black",
    marginRight: 10,
  },

  adiText: {
    fontSize: 38,
    fontFamily: "Gordita-Bold",
    color: "black",
  },

  profileIcon: {
    width: 38,
    height: 38,
    resizeMode: "contain",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    height: 50,
    paddingHorizontal: 20,
    marginBottom: -200,
    marginLeft: 8,
    borderRadius: 25,
    shadowColor: "gray",
    shadowOpacity: 0.5,
    backgroundColor: "#F8F8F8",
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    fontFamily: "Gordita-Regular",
    fontSize: 16,
  },
  sectionTitle: {
    fontFamily: "Gordita-Bold",
    fontSize: 20,
    marginBottom: 10,
  },
  tabsContainer: {
    marginTop: 20,
  },
});

export default Home;
