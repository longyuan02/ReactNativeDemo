/* eslint-disable*/
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createAppContainer, NavigationActions, StackNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import Webviews from "./singleview/WebviewS";
/* eslint-disable*/
export default class Person extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>个人中心</Text>
                <Button
                    title="Go Back"
                    // onPress={() => this.props.navigation.goBack()}
                    // onPress={() =>
                    //     navigate('Webviews')
                    // }
                      onPress={() => this.props.navigation.navigate('Webviews')}//navigate 判断如果在本路由-->不跳转
                    //   onPress={() => this.props.navigation.push('Details')} //有压栈操作
                    // onPress={() => this.props.navigation.goBack()} //返回操作
                />
            </View>
        );
    }
}