/* eslint-disable  */
import React, { Component } from "react"
// import {View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, SectionList, Alert} from 'react-native';
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native'
import API from '../utils/InterfaceAdress';

export default class FunctionView extends Component{
    componentDidMount(){
        // this.fetchData();
    }
    render(){
        return (
            // // 尝试把`flexDirection`改为`column`看看
            // <View style={{flex: 1, flexDirection: 'column'}}>
            //   <View style={{flex:1, backgroundColor: 'powderblue'}} />
            //   <View style={{flex:2, backgroundColor: 'skyblue'}} />
            //   <View style={{flex:2, backgroundColor: 'steelblue'}} />
            // </View>
            // 尝试把`alignItems`改为`flex-start`看看
      // 尝试把`justifyContent`改为`flex-end`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50,height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50,height: 100, backgroundColor: 'steelblue'}} />
      </View>
          );
    }

    async fetchData(){
        fetch(API.REQUEST_SURL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', //数据格式 json或者key-value形式
            },
        }).then(response => response.json())
            .then(responseData => {
                this.state.objM = JSON.stringify(responseData.responseParams.modules);
                var datas = new Array();
                responseData.responseParams.modules.forEach((item, index) => {
                    if (item.moduleType == "15" || item.moduleType == "18") {
                        datas.push(item);
                    }
                });
                this.state.dataSource = datas;
                this.state.listCount = this.state.dataSource.length;
                this.state.dataSource.forEach(async (item, index) => {
                    let fifth = await this.fetchData_Fifth(item.bannerKeyword, item.moduleType);
                });
            }).catch((error) => {
            console.error(error);
        });
    }
}



