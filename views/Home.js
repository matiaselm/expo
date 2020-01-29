import React from 'react';
import List from "../components/List";
import {View} from "react-native";

/*
Home screen is the View holding the whole list of posts
 */

const Home = (props) => {
    const {navigation} = props;
    return (
        <View>
            <List navigation={navigation}/>
        </View>
    );
};

export default Home;
