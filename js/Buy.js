/* eslint-disable */

import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  TouchableHighlight
} from 'react-native';
import API from './utils/API';
const REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
// var REQUEST_URL="https://cms-uat.gomegold.com/mall/v2/queryMoudleList";
export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
       this.fetchData = this.fetchData.bind(this);
  }
  //方法
  _onPress(obj){
    alert(obj);
  }

  componentDidMount() {
    this.fetchData();
  }
//数据请求绑定数据
  fetchData() {
    fetch(API.REQUEST_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json', //数据格式 json或者key-value形式
      },
    })
      .then(response => response.json())
      .then(responseData => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        //setState会触发一次重新渲染流程
        // alert(JSON.stringify(responseData))
        this.setState({
          //在state中定义数据
          dataSource: responseData.responseParams.modules,
          loaded: true
        });
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <View style={{flexDirection:'column'}}>
      <FlatList
        data={this.state.dataSource}
        style={styles.list}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,separators}) => <TouchableHighlight onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
            onPress={() => this._onPress(item.title)}>
              <View style={{backgroundColor: 'white'}}>
              <Text style={styles.title}>{item.title}</Text></View></TouchableHighlight>}
              // 点击事件
        // renderItem={({item, index, separators}) => (
        //   <TouchableHighlight 
        //     onShowUnderlay={separators.highlight}
        //     onHideUnderlay={separators.unhighlight}
        //     onPress={() => this._onPress(item.title)}>
        //     <View style={{backgroundColor: 'white'}}>
        //       <Text style={styles.title}>{item.title}</Text>
        //     </View>
        //   </TouchableHighlight>
        // )}
      />
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading movies...</Text>
      </View>
    );
  }

  renderMovie({ item }) {
    // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
    // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: item.posters.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    paddingLeft:10,
    paddingRight:10,
    marginBottom: 8,
    textAlign: "center"
  },
  year: {
    textAlign: "center"
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  list: {
    paddingTop: 20,
    backgroundColor: "#F5FCFF"
  }
});



// import React from 'react';
// import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
// export default class FetchExample extends React.Component {
//   constructor(props){
//     super(props);
//     this.state ={ isLoading: true}
//   }
//   componentDidMount(){
//     return fetch('https://facebook.github.io/react-native/movies.json')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         this.setState({
//           isLoading: false,
//           dataSource: responseJson.movies,
//         }, function(){
//         });
//       })
//       .catch((error) =>{
//         console.error(error);
//       });
//   }
//   render(){
//     if(this.state.isLoading){
//       return(
//         <View style={{flex: 1, padding: 20}}>
//           <ActivityIndicator/>
//         </View>
//       )
//     }

//     return(
//       <View style={{flex: 1, paddingTop:20}}>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
//           keyExtractor={(item, index) => item.id}
//         />
//       </View>
//     );
//   }
// }