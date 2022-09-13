import React from "react";
import {Text, View, StyleSheet} from "react-native";


const Nav = ({nameofApp}) => (
    <View style={styles.nav}>
        <Text>{nameofApp}</Text>
        
    </View>

)

const styles = StyleSheet.create({

    nav:{
        backgroundColor: 'red',
        alignItems: 'center',
        padding: 10,
        width: '100%',

    }
})

export default Nav;