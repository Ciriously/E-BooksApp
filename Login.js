import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const LoginPage = ({ navigation, showFooter }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Image
        source={require('./assets/Saly-16.png')}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Conditionally render the Footer */}
      {showFooter && <Footer />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginPage;
