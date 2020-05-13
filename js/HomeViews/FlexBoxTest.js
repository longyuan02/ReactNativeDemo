/* eslint-disable  */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, SectionList, Alert} from 'react-native';

export default class FlexBoxTest extends Component{
   render() {
        return(
            <View style={styles.container}>
                    <Text>ceshi </Text>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    // containt:{
    //     flexDirection:'row',
    // }
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
});