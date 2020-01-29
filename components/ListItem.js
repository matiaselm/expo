import PropTypes from "prop-types"
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

const mediaURL = "http://media.mw.metropolia.fi/wbma/uploads/";

const ListItem = (props) => {
    return(
        <TouchableOpacity style={styles.listItem}
          onPress={
              () => {
                  props.navigation.push('Single',{
                      filename: props.singleMedia.filename,
                      title: props.singleMedia.title,
                  });
              }
          }
        >
            <Image style={styles.image}
                   source={{uri: mediaURL + props.singleMedia.filename}}
            />
            <View style={styles.textBlock}>
                <Text style={styles.header}>{props.singleMedia.title}</Text>
                <Text>{props.singleMedia.description}</Text>
            </View>
        </TouchableOpacity>
    )
};

ListItem.propTypes = {
    singleMedia: PropTypes.object,
};

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        backgroundColor: '#d4d4d4',
        margin: 5,
        marginBottom: 10,
        padding: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        elevation: 10
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

export default ListItem;