/* eslint-disable */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import API from './utils/API'

// ...
export default class MyWebComponent extends Component {
  render() {
    return (
      <WebView source={{uri:API.H5Url+'recycleIndex?buyBack=app'}} />
    );
  }
}