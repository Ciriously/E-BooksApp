import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const Register = ({ navigation }) => {
  const handleBack = () => {
    // Handle the back button press
    navigation.goBack();
  };

  const navigateToSignIn = () => {
    // Navigate to the Sign In page
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        {/* Replace the path with your actual back arrow icon */}
        <Image
          source={require("../assets/arrow.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Welcome! 👋</Text>

        {/* Description Text */}
        <Text style={styles.descriptionText}>
          Create an account to unlock a world of words and stories. ✨
        </Text>
      </View>

      {/* Input Container */}
      <View style={styles.inputContainer}>
        {/* Input Fields */}
        <TextInput
          style={[styles.input, styles.inputText]} // Apply inputText style
          placeholder="Name"
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={[styles.input, styles.inputText]} // Apply inputText style
          placeholder="Email"
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={[styles.input, styles.inputText]} // Apply inputText style
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        />
      </View>

      {/* Signup Button */}
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate("Onboarding")}
      >
        <Text style={styles.signupButtonText}>Sign up</Text>
      </TouchableOpacity>

      {/* Or Separator */}
      <View style={styles.orSeparator}>
        <View style={styles.separatorLine}></View>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.separatorLine}></View>
      </View>

      {/* Social Media Icons */}
      <View style={styles.iconContainer}>
        <Image source={require("../assets/facebook.png")} style={styles.icon} />
        <Image source={require("../assets/google.png")} style={styles.icon} />
        <Image source={require("../assets/apple.png")} style={styles.icon} />
      </View>

      {/* Already have an account text with Sign In link */}
      <View style={styles.loginTextContainer}>
        <Text style={styles.greyText}>Already have an account?</Text>
        <TouchableOpacity onPress={navigateToSignIn}>
          <Text style={styles.blueText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    paddingTop: 0,
  },
  backButton: {
    alignSelf: "flex-start",
    padding: 10,
    marginBottom: 40,
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  textContainer: {
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  welcomeText: {
    fontSize: 42,
    fontFamily: "poppins-ExtraBold",
    marginBottom: 5,
    textAlign: "left",
    color: "#6F00FF",
  },
  descriptionText: {
    fontSize: 18,
    fontFamily: "poppins-Medium",
    textAlign: "left",
    marginBottom: 28,
    color: "#72A0C1",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 45,
  },
  input: {
    width: "80%",
    height: 40,
    borderBottomWidth: 1.5, // Add underline
    borderBottomColor: "#ccc", // Set underline color
    marginBottom: 50,
    paddingLeft: 10,
    fontSize: 16,
    fontFamily: "poppins-Regular",
  },
  inputText: {
    color: "#6F00FF",
    fontFamily: "poppins-ExtraBold",
    fontSize: 18,
  },
  signupButton: {
    backgroundColor: "#6F00FF",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginTop: 15,
  },
  signupButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Gordita-Bold",
  },
  orSeparator: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    marginTop: 40,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  orText: {
    fontSize: 16,
    color: "#333",
    fontFamily: "Gordita-Bold",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginHorizontal: 10,
  },
  loginTextContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  greyText: {
    color: "gray",
    marginRight: 5,
    fontFamily: "Gordita-Bold",
  },
  blueText: {
    color: "#6F00FF",
    fontFamily: "Gordita-Bold",
  },
});

export default Register;
