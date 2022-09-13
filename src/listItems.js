import React from "react";
import {Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from "react-native";

const ListItems = ({items}) => {
    return(
        items.map((item) => (
        <View style={styles.listItems}>
            <Text>{item}</Text>
        </View>
        ))
        
    )
}

const styles = StyleSheet.create({

    listItems:{
        backgroundColor: '#cecece',
        alignItems: 'center',
        padding: 10,
        marginTop:5,
        width: '100%',

    }
});

export default ListItems;