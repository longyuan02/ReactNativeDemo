/* eslint-disable */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
} from 'react-native';
const REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
// var REQUEST_URL="https://cms-uat.gomegold.com/mall/v2/queryMoudleList?channelId=23&page=index_v2&platform=gold.app";
var URLREQEST=('https://cms-uat.gomegold.com/mall/v2/queryMoudleList?channelId=23&page=index_v2&platform=gold.app', {
  method: 'get',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json', //数据格式 json或者key-value形式
  }});

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
       this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json', //数据格式 json或者key-value形式
      },})
      .then(response => response.json())
      .then(responseData => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        //setState会触发一次重新渲染流程
        alert(JSON.stringify(responseData))
        this.setState({
          data: this.state.data.concat(responseData.movies),
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
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles.list}
        keyExtractor={item => item.id}
        horizontal={true}
      />
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
// export default class FetchExample extends React.Component {
//     constructor(props){
//       super(props);
//       this.state ={ isLoading: true}
//     }
//      //请求1
//     componentDidMount(){
//       return fetch('https://facebook.github.io/react-native/movies.json')
//         .then((response) => response.json())
//         .then((responseJson) => {
//           this.setState({
//             isLoading: false,
//             dataSource: responseJson.movies,
//           }, function(){
  
//           });
//         })
//         .catch((error) =>{
//           console.error(error);
//         });
//     }
//   ////请求2
//   //  var request = new XMLHttpRequest();
//   //  request.onreadystatechange = (e) => {
//   //    if (request.readyState !== 4) {
//   //      return;
//   //    }
//   //    if (request.status === 200) {
//   //    isLoading: true;
//   //    dataSource: responseJson.movies,
//   //      console.log('success', request.responseText);
//   //    } else {
//   //      console.warn('error');
//   //    }
//   //  };
//   //
//   //  request.open('GET', 'https://mywebsite.com/endpoint/');
//   //  request.send();
//     render(){
//       if(this.state.isLoading){
//         return(
//           <View style={{flex: 1, padding: 20}}>
//             <ActivityIndicator/>
//           </View>
//         )
//       }
//       return(
//         <View style={{flex: 1, paddingTop:20}}>
//           <FlatList
//             data={this.state.dataSource}
//             renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
//             keyExtractor={(item, index) => item.id}
//           />
//           <HelloWorldApp></HelloWorldApp>
//         </View>
//       );
//     }
//   }