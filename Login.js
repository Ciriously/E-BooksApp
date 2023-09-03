import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Home from './Home'; // Import the Home component

const LoginPage = ({ navigation }) => {
  const handleGoToHome = () => {
    // Navigate to the Home component
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>

      {/* Green right arrow */}
      <TouchableOpacity style={styles.greenArrow} onPress={handleGoToHome}>
        <Text style={styles.arrowText}>➜</Text>
      </TouchableOpacity>
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
  greenArrow: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 50, // Makes it circular
  },
  arrowText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default LoginPage;
