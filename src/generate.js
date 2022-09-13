import React from "react";
import {Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const Generate = ({add}) => (
    <TouchableOpacity
    onPress={() => add()}
    underlayColor="blue"
    activeOpacity={1}
    >
     <View style={styles.generate}>
        <Text style={{color:'#fff'}}>Add Number</Text>
         
     </View>
    </TouchableOpacity>

)

const styles = StyleSheet.create({

    generate:{
        backgroundColor: '#00BCD4',
        alignItems: 'center',
        padding: 10,
        width: '100%',

    }
})

export default Generate;