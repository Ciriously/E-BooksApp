import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Home from './Home'; // Import the Home component

const LoginPage = ({ navigation }) => {
  const handleGoToHome = () => {
    // Navigate to the Home component
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Pink Background Container */}
      <View style={styles.pinkContainer}>
        {/* Title Image */}
        <Image source={require('./assets/title.png')} style={styles.titleImage} />

        {/* Circular arrow inside the pink container */}
        <TouchableOpacity style={styles.greenArrow} onPress={handleGoToHome}>
          <Image source={require('./assets/right-arrow.png')} style={styles.arrowImage} />
        </TouchableOpacity>
      </View>

      {/* Background Image */}
      <View style={styles.backgroundContainer}>
        <Image
          source={require('./assets/Images/test1.jpg')}
          style={styles.backgroundImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Align items to the bottom
  },
  pinkContainer: {
    flex: 1,
    backgroundColor: 'white', // Pink background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleImage: {
    width: 200, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    resizeMode: 'contain', // Maintain aspect ratio and fit the container
  },
  greenArrow: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
    borderRadius: 25, // Makes it circular
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // Adjust the space between the title image and the arrow
  },
  arrowImage: {
    width: 20,
    height: 20,
  },
  backgroundContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end', // Align the image to the bottom
  },
  backgroundImage: {
    width: '100%',
    height: 500, // Adjust the height as needed to minimize the image
    resizeMode: 'cover', // Maintain aspect ratio and cover the container
    bottom: -70, // Position the image at the very bottom of the container
  },
});

export default LoginPage;
