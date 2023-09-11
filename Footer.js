import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";

const Footer = () => {
  Font.loadAsync({
    "Gordita-Medium": require("./assets/fonts/Gordita-Medium.ttf"),
    // Add more fonts if needed
  });
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("home"); // Initialize the active tab state

  const handleTabPress = (tabName) => {
    // Set the active tab when a tab is pressed
    setActiveTab(tabName);

    // Navigate to the corresponding screen
    if (tabName === "home") {
      navigation.navigate("Home");
    } else if (tabName === "bookmarks") {
      navigation.navigate("Bookmarks");
    } else if (tabName === "profile") {
      navigation.navigate("Profile");
    }
  };

  return (
    <View style={styles.footer}>
      <TabButton
        tabName="home"
        onPress={() => handleTabPress("home")}
        icon={require("./assets/home.png")}
        isActive={activeTab === "home"} // Pass whether it's active as a prop
      >
        Explore
      </TabButton>

      <TabButton
        tabName="bookmarks"
        onPress={() => handleTabPress("bookmarks")}
        icon={require("./assets/ribbon.png")}
        isActive={activeTab === "bookmarks"} // Pass whether it's active as a prop
      >
        My Library
      </TabButton>

      <TabButton
        tabName="profile"
        onPress={() => handleTabPress("profile")}
        icon={require("./assets/user.png")}
        isActive={activeTab === "profile"}
      >
        Profile
      </TabButton>
    </View>
  );
};

const TabButton = ({ tabName, onPress, children, icon, isActive }) => (
  <TouchableOpacity style={styles.tab} onPress={onPress}>
    <View style={styles.tabContainer}>
      <Image
        source={icon}
        style={[
          styles.tabIcon,
          isActive && styles.activeTabIcon, // Apply active tab icon style conditionally
        ]}
      />
      <Text
        style={[
          styles.tabText,
          isActive && styles.activeTabText, // Apply active tab text style conditionally
        ]}
      >
        {children}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F7F9F9", // Use RGBA color with alpha value (0.8 for 80% opacity)
    marginVertical: 1,
    paddingHorizontal: 10,
    height: 55,
  },

  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabContainer: {
    alignItems: "center",
  },
  tabIcon: {
    width: 20,
    height: 20,
    marginBottom: 5,
    tintColor: "gray", // Default icon color
  },
  tabText: {
    color: "#000",
    fontFamily: "Gordita-Medium",
    color: "gray", // Default text color
  },
  activeTabIcon: {
    tintColor: "#FF69B4", // Change this to the fill color you want
  },
  activeTabText: {
    color: "#FF69B4", // Change this to the fill color you want
  },
});

export default Footer;
