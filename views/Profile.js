import React from 'react';
import {StyleSheet, View, Text, Button, AsyncStorage} from 'react-native';
import { useState, useEffect } from "react";

/*
Profile is the view showing user's info after they've logged in
 */

const getUsername = () => {
  const [username, setUsername] = useState([]);

  const getInfo = async() => {
    try {
      const username = await AsyncStorage.getItem('username');
      setUsername(username);
    } catch(e){
      console.log('Error: ', e.message);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);
  return username;
};
const getUserEmail = () => {
  const [userEmail, setUserEmail] = useState([]);

  const getInfo = async() => {
    try {
      const email = await AsyncStorage.getItem('userEmail');
      setUserEmail(email);
    } catch(e){
      console.log('Error: ', e.message);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);
  return userEmail;
};

const Profile = (props) => {
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };
  return (
    <View style={styles.container}>
      <Text>{getUsername()}</Text>
      <Text>{getUserEmail()}</Text>
      <Button title="Logout!" onPress={signOutAsync} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20,
  },
});

export default Profile;
