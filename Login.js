import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const handleLogin = () => {
    // Handle login logic here
  };

  const handleSignUp = () => {
    // Handle signup logic here
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/Images/loginCover.jpg')} style={styles.coverImage} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.signUpButton]}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  coverImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: 'transparent',
    borderColor: 'pink',
    borderWidth: 1,
  },
  signUpButton: {
    backgroundColor: 'transparent',
    borderColor: 'pink',
    borderWidth: 1,
  },
  buttonText: {
    color: 'pink',
    fontWeight: 'bold',
  },
});

export default Login;
