/* eslint-disable */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';

// import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './js/HomeView';
import Person from './js/Person';
import BuyWebView from './js/BuyWebView'
import Webviews from "./js/singleview/WebviewS";
import BottomTab from './js/BottomTabNavigator';
import {createStackNavigator} from "react-navigation-stack";
const App = createStackNavigator({
    BottomTab:{screen:BottomTab,
        navigationOptions:{
            title:'',
            flex:1,
        },
    },
    Webviews: { screen: Webviews,
        navigationOptions:{
            title:'Webviews',
            flex:1,
        },
    },
});
export default createAppContainer(App);