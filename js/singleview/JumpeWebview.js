/* eslint-disable*/
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import API from "../utils/API";

export default class JumpeWebview extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            tolink: this.props.navigation.state.params.toLinke,
        }
    }

    render() {
        console.log("tolink:" + this.state.tolink);
        return (
            <WebView source={{uri: this.state.tolink}}/>
        );
    }
}