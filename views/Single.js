import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, ListItem, Button, Text, Image} from 'react-native-elements';

/*
Single.js shows the one picture that was clicked at the homepage.
 */

const mediaURL = "http://media.mw.metropolia.fi/wbma/uploads/";

const Single = (props) => {
  const filename = props.navigation.getParam('filename', 'Image not found');
  console.log('Image filename: ' + filename);
  return (
    <Card
      wrapperStyle={{height: '100%'}}
      title={props.navigation.getParam('title', 'No title')}
    >
      <Image source={{uri: mediaURL + filename}}
             style={{
               width: '100%',
               height: '90%',
             }}/>
    </Card>
  );
};

/*    Add this to card below image

      <Text>
        {props.navigation.getParam('description', 'No Description')}
      </Text>
 */

/*
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
*/

export default Single;
