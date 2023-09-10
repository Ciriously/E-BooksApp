import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const NewBookInfo = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        {/* Title and Author */}
        <Text style={styles.title}>If You Could See the Sun</Text>
        <Text style={styles.author}>Anna Liang</Text>

        {/* Image Container */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/Images/4.png")}
            style={styles.bookImage}
          />
        </View>

        {/* Synopsis Container */}
        <View style={styles.synopsisContainer}>
          {/* Info Banner */}
          <View
            style={[
              styles.infoContainer,
              Platform.OS === "android"
                ? styles.androidShadow
                : styles.iosShadow,
            ]}
          >
            <InfoField value="⭐ 4.5" color="#FFF8E0" />
            <InfoField value="Fantasy" color="#E2FCFB" />
            <InfoField label="432" value=" PGs" color="#fff" />
          </View>
          <Text style={styles.synopsisHeader}>Synopsis</Text>

          <Text style={styles.synopsisText}>
            Alice Sun has always felt invisible at her elite Beijing
            international boarding school, where she’s the only scholarship
            student among China’s most rich and influential teens. But then she
            starts uncontrollably turning invisible—actually invisible. When her
            parents drop the news that they can no longer afford her tuition,
            even with the scholarship, Alice hatches a plan to monetize her
            strange new power—she’ll discover the scandalous secrets her
            classmates want to know, for a price. {"\n\n"}
            But as the tasks escalate from petty scandals to actual crimes,
            Alice must decide if it’s worth losing her conscience—or even her
            life.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const InfoField = ({ label, value, color }) => (
  <View style={[styles.infoField, { backgroundColor: color }]}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },

  backButton: {
    position: "absolute",
    left: 10,
    top: 10,
    zIndex: 1,
    marginTop: 35,
  },

  backButtonText: {
    fontSize: 16,
    color: "#007AFF",
  },

  title: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: "Gordita-Medium",
  },

  author: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "Gordita-Regular",
  },

  imageContainer: {
    width: "70%",
    aspectRatio: 1,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },

  bookImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  synopsisHeader: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    marginRight: 270,
    fontFamily: "Gordita-Bold",
  },

  synopsisContainer: {
    alignItems: "center",
    borderColor: "white",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginTop: 50,
  },

  synopsisText: {
    fontSize: 14,
    textAlign: "left",
    paddingHorizontal: 20,
    lineHeight: 24, // Increase line spacing
    fontFamily: "Gordita-Regular",
  },

  infoContainer: {
    backgroundColor: "#fff",
    marginTop: -30, // Overlapping the Synopsis
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 12,
    padding: 10,
    marginLright: 48,
    height: 50,
    width: "95%",
    zIndex: 1, // Ensure Info banner is above Synopsis
  },

  infoField: {
    flex: 1,
    padding: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 48,
    paddingLeft: 10,
    borderRadius: 12,
    fontFamily: "Gordita-Regular",
  },

  infoLabel: {
    fontSize: 14,
    color: "#000",
    paddingRight: 1,
    fontFamily: "Gordita-Bold",
  },

  infoValue: {
    fontSize: 14,
    fontFamily: "Gordita-Regular",
    color: "#000",
    paddingRight: 1,
  },

  androidShadow: {
    elevation: 5,
  },

  iosShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});

export default NewBookInfo;
