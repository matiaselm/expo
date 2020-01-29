import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

/*
Single.js shows the one picture that was clicked at the homepage.
 */

const mediaURL = "http://media.mw.metropolia.fi/wbma/uploads/";

const Single = (props) => {
  const filename = props.navigation.getParam('filename', 'Image not found');
  console.log('Image filename: ' + filename);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {props.navigation.getParam('title', 'No title')}
      </Text>
      <Image style={styles.image}
             source={{uri: mediaURL + filename}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 1
  },
  image: {
    flex: 9,
    width: 350,
    height: 400
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
});

export default Single;
