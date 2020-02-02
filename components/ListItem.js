import React from "react";
import PropTypes from "prop-types"
import {Image, StyleSheet, TouchableOpacity, View, ActivityIndicator} from "react-native";
import {Header, Body, Title, Text, Button, ThemeProvider, ThemeConsumer, ListItem} from "react-native-elements";

const mediaURL = "http://media.mw.metropolia.fi/wbma/uploads/";

/*
const Item = (props) => {
  return (
    <ListItem onPress={
      () => {
        props.navigation.push('Single', {
          filename: props.singleMedia.filename,
          title: props.singleMedia.title,
        });
      }
    }
    >
      <Image
             source={{uri: mediaURL + props.singleMedia.filename}}
      />
      <View style={styles.textBlock}>
        <Text style={styles.header}>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
    </ListItem>
  )
};
*/

const Item = (props) => (
  <ListItem
    onPress={() => {
      props.navigation.push('Single', {
        filename: props.singleMedia.filename,
        title: props.singleMedia.title,
        description: props.singleMedia.description,
      });
    }
    }
    title={props.singleMedia.title}
    subtitle={props.singleMedia.description}
    leftAvatar={{
      source: {uri: mediaURL + props.singleMedia.filename},
      title: props.singleMedia.title,
      placeholderContent: ActivityIndicator,
    }}
    bottomDivider
    chevron
  />
);

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

/*
const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 5,
    marginBottom: 5,
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    elevation: 10,
    borderRadius: 5,
  },
  header: {
    fontWeight: 'bold',
    padding: 2
  },
  image: {
    borderRadius: 30,
    marginRight: 5,
    flex: 1,
    width: 100,
    height: 120
  },
  textBlock: {
    flex: 2
  }
});
*/

export default Item;
