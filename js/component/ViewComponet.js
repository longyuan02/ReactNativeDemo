/* eslint-disable  */
import React, {Component} from 'react';
import {View,StyleSheet,Alert,TouchableOpacity} from 'react-native';
import {Text} from "react-native-paper";
export default class CustmerView extends Component{
    constructor() {
        super();
        this._onPressButton=this._onPressButton.bind(this)
    }
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }
  render() {
    return(
        <View style={styles.container}>
            <Text onPress={()=>{Alert.alert('你点击了机票')}}style={styles.firstT}>机票</Text>
            <View style={styles.secondV}>
                <TouchableOpacity onPress={()=>this._onPressButton()} style={{flex:1,}} >
                <Text style={styles.secondT}>火车票</Text>
            </TouchableOpacity>
                <Text style={styles.secondT}>接送机</Text>
            </View>
            {/*<Button >点击</Button>*/}
        </View>
        );
  }
    /**
     *  onPress={() => {
    Alert.alert("你点击了按钮！");
  }}
     */
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#0091ea',
        width:206,
        height:104,
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#dd2c00',
        alignItems:'center',
    },
    firstT:{
        flex:1,
        width: 'auto',
        height: 100,
        color:'#ffebee',
        textAlign: 'center',
        textAlignVertical:'center',
        borderWidth:1,
        borderColor:'#dd2c00',
    },
    secondV:{
        flex:1,
        borderWidth:1,
        borderColor:'#dd2c00',
    },
    secondT:{
        flex:1,
        width: 'auto',
        height: 100,
        color:'#ffebee',
        justifyContent:'center',
        textAlign:'center',
        textAlignVertical:'center',
        borderWidth:1,
        borderColor:'#dd2c00',
    },
    secondDivisionn:{
        height:1,
        backgroundColor: "#dd2c00"
    }
});
