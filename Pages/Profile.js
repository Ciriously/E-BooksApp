import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';

const Profile = () => {
  const [fontsLoaded] = useFonts({
    'Gordita-Regular': require('../assets/fonts/Gordita-Regular.ttf'),
    'Gordita-Bold': require('../assets/fonts/Gordita-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Cover Picture */}
      <View style={styles.coverPic}>
        <Image
          source={require('../assets/cover.jpg')}
          style={styles.coverImage}
        />
      </View>

      <View style={styles.card}>
        {/* Profile Icon */}
        <View style={styles.profileIconContainer}>
          <Image
            source={require('../assets/icon2.png')}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coverPic: {
    height: 200, // Adjust the height as needed
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 20,
    shadowColor: '#007AFF', // Light blue shadow color
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5, // Adjust the opacity as needed
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 20,
    marginTop: -50, // Adjust the margin-top to overlap with the cover pic
    alignItems: 'center',
  },
  profileIconContainer: {
    backgroundColor: '#fff',
    borderRadius: 75,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  userName: {
    fontFamily: 'Gordita-Bold',
    fontSize: 24,
    marginBottom: 10,
    marginLeft: 100,
  },
  userBio: {
    fontFamily: 'Gordita-Regular',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  fieldsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  field: {
    alignItems: 'center',
  },
  fieldNumber: {
    fontFamily: 'Gordita-Bold',
    fontSize: 20,
  },
  fieldText: {
    fontFamily: 'Gordita-Regular',
    fontSize: 14,
    color: '#777',
  },
});

export default Profile;
