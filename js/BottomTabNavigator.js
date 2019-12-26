/* eslint-disable */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';

// import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './HomeView';
import Person from './Person';
// import Finace from './js/Finace';
// import Buy from './js/Buy';
import BuyWebView from './BuyWebView'
//路由配置
const AppNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: '主页',
                tabBarColor: '#FFFFFF',
                tabBarIcon: ({tintColor}) => (
                    <Icon name="home" color={tintColor} size={24} />
                ),
            },
        },
        Buy: {
            screen: BuyWebView,
            navigationOptions: {
                tabBarLabel: '理财',
                tabBarColor: '#FFFFFF',
                tabBarIcon: ({tintColor}) => (
                    <Icon name="tablet" color={tintColor} size={24} />
                ),
            },
        },
        Person: {
            screen: Person,
            navigationOptions: {
                tabBarLabel: '个人中心',
                tabBarColor: '#FFFFFF',
                tabBarIcon: ({tintColor}) => (
                    <Icon name="user" color={tintColor} size={24} />
                ),
            },
        },
    },
    {
        // 初始名称为 [Details]: Person
        // order: ['Settings', 'Home'],
        initialRouteName: 'Home',
        activeTintColor: 'black',
        inactiveTintColor: '#333',
        // 缩放图标的效果
        shifting: true, // 默认在大于3个路由时为true, 如果显式的设置为true了则少于3个时也会显示效果
        barStyle: {
            backgroundColor: 'orange',
        },
    },
);
export default createAppContainer(AppNavigator);