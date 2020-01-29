import {FlatList} from "react-native";
import React, {useContext} from "react";
import ListItem from "./ListItem";
import {MediaContext} from "../contexts/MediaContext";
import {getAllMedia} from "../hooks/APIHooks";

const List = (props) => {
    const [media, setMedia] = useContext(MediaContext);
    const [data] = getAllMedia();
    setMedia(data);
    return (
        <FlatList
            data={media}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <ListItem navigation={props.navigation} singleMedia={item} />}
        />
    );
};


export default List;
