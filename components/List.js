/* eslint-disable max-len */
import React, {useContext, useEffect, useState} from 'react';
import {
  List as BaseList, Spinner, View,
} from 'native-base';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext';
import {getAllMedia, getUserMedia} from '../hooks/APIHooks';
import PropTypes from 'prop-types';
import {AsyncStorage} from "react-native";

const List = (props) => {
  const [media, setMedia] = useContext(MediaContext);
  const [loading, setLoading] = useState(true);

  const getMedia = async () => {
    try {
      let data = [];
      if (props.mode === 'all') {
        console.log('getMedia getAllMedia', props.mode);
        data = await getAllMedia();
      }
      else if (props.mode === 'myfiles') {
        console.log('getMedia getUserMedia', props.mode);
        const token = await AsyncStorage.getItem('userToken');
        data = await getUserMedia(token);
      }
      setMedia(data.reverse());
      setLoading(false);
    } catch (e) {
      console.log('getMedia: ', e.message);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  return (
    <View>
      {loading ? (
        <Spinner/>
      ) : (
        <BaseList
          dataArray={media}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <ListItem
            navigation={props.navigation}
            singleMedia={item}
          />}
        />
      )}
    </View>
  );
};

List.propTypes = {
  navigation: PropTypes.object,
  mode: PropTypes.string,
};

export default List;
