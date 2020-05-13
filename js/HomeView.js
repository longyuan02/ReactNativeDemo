/* eslint-disable */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, SectionList, Alert} from 'react-native';
import {NavigationActions, TabNavigator, StackNavigator} from 'react-navigation'
import API from './utils/InterfaceAdress';
import {FlatList, TouchableHighlight} from 'react-native-gesture-handler';
import AppUtils from './AppUtils'
import Frisbee from 'frisbee'
// import FunctionView from './HomeViews/FunctionView'
import CustmerView from './component/ViewComponet'

import FlexBoxTest from './HomeViews/FlexBoxTest'

import jumpeWebview from './singleview/JumpeWebview'

export default class HomeView extends Component {
    constructor(props) {
        super(props);
        this.moudleData = new Array();
        this.singleModule = new Array();
        this.putData = new Array();
        const mainData = {};
        this.state = {
            loaded: false,
            dataSource: this.moudleData,
            singleModule: this.singleModule,
            objM: mainData,
            listCount: 0,
            putDataSource: [],
        }
        this.fetchData = this.fetchData.bind(this);
        this.fetchData_Fifth = this.fetchData_Fifth.bind(this);
        this._TitleView = this._TitleView.bind(this);
        this._ImageContent = this._ImageContent.bind(this);
        // this.renderItem = this.renderItem.bind(this);
    }

    _onPressButton() {
        // alert("click1");
        console.log("click1");
    }

//// Frisbee请求测试
// async dddd(){
//     console.log('首页_公告====='+"==============");
//         /**
//     * 先抽取成全局变量
//     * 网络工具
//     **/
//    const api = new Frisbee({
//     baseURI: API.cmsUrl,
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Accept-Charset': 'utf-8',
//         'Method': 'GET',
//     }
// });
//   let data = await api.get('banner/bannerListPage')
//   data就是方法返回的数据对象，body属性就是具体的json内容
    // console.log('首页_公告====='+"=============="+data.body);
// }


//开始数据请求绑定数据
    async fetchData() {
        fetch(API.REQUEST_SURL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', //数据格式 json或者key-value形式
            },
        })
        .then(response => response.json())
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
    async functionEnter(){
        // let formData = new FormData();
        // formData.append("channel","23");
        // formData.append("token","4c1cf46e3fb844bc85601cf81a2cc9949A1mfb");
        // formData.append("keyWord","HOME_GONGNENG");
        // formData.append("version","3.4.0");
        // fetch(API.FINANCE_BANNER_MENU,{
        //     method:'POST',
        //     headers:{
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        // //     body:JSON.stringify({
        // //         channel:'23',
        // //         token:'4c1cf46e3fb844bc85601cf81a2cc9949A1mfb',
        // //         keyWord:'HOME_GONGNENG',
        // //         version:'3.4.0'
        // // })
        // }).then(response => response)
        // .then(responseData =>{
        //     console.log("function======="+JSON.stringify(responseData))
        // }).catch((error)=>{
        //     console.error(error)
        // })
        let api = new Frisbee({
            baseURI: 'https://cms-uat.gomegold.com/banner/bannerListPage',
            // baseURI:"http://10.163.0.96:49000/",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Accept-Charset': 'utf-8',
                'Method': 'POST',
            }
        });

        /* 成功 */
        // fetch('https://cnodejs.org/api/v1/topics?page=1&tab=job&limit=10', {
        //     method: 'GET',//1
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // }).then((response) => response.json())
        //     .then((jsonData) => {
        //         // let country = jsonData.data.country;
        //         // let city = jsonData.data.city;
        //         console.log("---------------------------"+JSON.stringify(jsonData)+"_____")
        //         alert("country:"+JSON.stringify(jsonData) + country + "-------city:" + city);
        //     }).catch((error)=>{
        //         console.log("-----------------------ee----"+error)
        //             console.error(error)
        //         })
    }

//广告位置15/18
    async fetchData_Fifth(keywords, moduleType) {
        //初始化versionName
        //成功 失败回调
        AppUtils.show(msg => {
                console.log(msg);
            },
            (x, y) => {
                this.setState({vsersionName: x});
                fetch(API.FINANCE_OTHER + "?version=" + this.state.vsersionName + "&keyWord=" + keywords + "&platform=gold.app", {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json', //数据格式 json或者key-value形式
                    },
                }).then(response => response.json())
                    .then(responseData => {
                        this.state.singleModule.push(responseData.result);
                        if (this.state.singleModule.length == this.state.listCount) {
                            this.state.dataSource.forEach((item, index) => {
                                //模块标题
                                var titleImage = item.titleImg;
                                this.state.singleModule[index] = {
                                    ...this.state.singleModule[index],
                                    titleImage,
                                    moduleType
                                };
                            })
                            console.log('dataSource====11==', this.state.dataSource);
                            this.state.singleModule.forEach((item, index) => {
                                var moduleType = this.state.singleModule[index].moduleType;
                                var titleImg = this.state.dataSource[index].titleImg;
                                var data = Array.from(item.bannerElements);
                                this.state.putDataSource.push({titleImg, moduleType, data})
                                console.log("putData=====each=", data);
                            })
                            console.log("putData======", this.state.putDataSource);
                            this.setState({
                                loaded: true,
                            })
                        }
                    }).catch((error) => {
                    console.error(error);
                });
            });
    }

    _ListView() {
        return (
            // <FunctionView></FunctionView>
            // <FlexBoxTest></FlexBoxTest>
            <CustmerView></CustmerView>
            // <View style={{flexDirection:'column'}}>
            //     <SectionList
            //     style={{flex:1}}
            //         sections={this.state.putDataSource}
            //         renderSectionHeader={this._TitleView}
            //         // renderItem={this._ImageContent}
            //         renderItem={({item}) =>
            //             this._ImageContent(item)}
            //         // sections={this.state.sourceData}
            //     />
            // </View>
            /**
             <View>
             <SectionList

             sections={this.state.putDataSource}
             renderSectionHeader={this._TitleView}
             // renderItem={this._ImageContent}
             renderItem={({item}) =>
                        this._ImageContent(item)}
             // sections={this.state.sourceData}
             />
             </View>
             */
        );
    }

    _renderItem({item}) {
        console.log("data=====", item);
        return (<View><Text>item</Text></View>);
    }

    /*标题*/
    _TitleView = (item) => {
        var txt = item.section.titleImg;
        if (txt != null && txt != "") {
            return (<View>
                <TouchableHighlight>
                    <Image style={styles.imageTitle} source={{uri: txt}} onPress={() => {
                        console.log(item);
                    }}/>
                </TouchableHighlight>
            </View>);
        } else {
            return null;
        }
    }

    /* 图片内容*/
    _ImageContent(items) {
        var tolink = items.tolink;
        console.log("tolink:" + tolink);
        const navigateAction = NavigationActions.navigate({
            routeName: 'jumpeWebview',
            params: {
                toLinke: tolink,
            },
        });
        if (tolink != null && tolink != "") {
            return (<TouchableOpacity onPress={() => this.props.navigation.dispatch(navigateAction)}><View
                style={styles.doubleImageConstaint}>
                <Image style={styles.doubleImageset}
                       source={{uri: items.imgUrl}}/></View></TouchableOpacity>);
        } else {
            return (<TouchableOpacity onPress={this._onPressButton}><View style={styles.doubleImageConstaint}
                                                                          onPress={() => {
                                                                              console.log("click2");
                                                                          }
                                                                          }>
                <Image style={styles.doubleImageset}
                       source={{uri: items.imgUrl}}/></View></TouchableOpacity>);
        }


    }

//两张图

//秒杀
// getSecondsKill(){
//    var url = "?channelId=" + MultigoldApi.Appkey(context);
//    fetch(API.HOME_SECONDSKILL,{
//      method: 'GET',
//     headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json', //数据格式 json或者key-value形式
//     },}).then(response => response.json())
//         .then(responseData => {
//          this.state.dataSource[index].push(responseData.responseParams.modules);
//         }).catch((error) => {
//           console.error(error);
//         });
//     }
// guessYouLike(type,index){
//   fetch(API.HOME_GUESSYOULIKE,{
//     method: 'POST',
//    headers: {
//    'Accept': 'application/json',
//    'Content-Type': 'application/json', //数据格式 json或者key-value形式
//    },
//    body:  JSON.stringify({recommendOwnPage:type})
//   }).then(response => response.json())
//        .then(responseData => {
//         console.log('guessYouLike======'+response);
//         this.state.dataSource[index].push(responseData.responseParams.modules);
//        }).catch((error) => {
//          console.error(error);
//        });
// }
// getGoodThingToRecommend(){
//   fetch(API.HOME_GUESSYOULIKE,{
//     method: 'GET',
//    headers: {
//    'Accept': 'application/json',
//    'Content-Type': 'application/json', //数据格式 json或者key-value形式
//    },
//    body:  JSON.stringify({recommendOwnPage:type})
//   }).then(response => response.json())
//        .then(responseData => {
//         this.state.dataSource[index].push(responseData.responseParams.modules);
//        }).catch((error) => {
//          console.error(error);
//        });
// }
//banner
getBanner(){
    console.log('getBanner===start')
    fetch(API.HOME_GOLDINVESTMENT,{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json', //数据格式 json或者key-value形式
        },
        body:  JSON.stringify({
            keyWord:'HOME_GONGNENG',
            version:'3.4.0',
            Cookie:'sessionId=4c1cf46e3fb844bc85601cf81a2cc9949A1mfb',
            channel:'23',
            channelId:'23',
            token:'4c1cf46e3fb844bc85601cf81a2cc9949A1mfb',
    })
    }).then(response => response)
    .then(responseData => {
        console.log("ddd======"+JSON.stringify(responseData.responseParams))
    //  this.state.dataSource[index].push(responseData.responseParams.modules);
    }).catch((error) => {
      console.error(error);
    });
}

    render() {
        // <FunctionView></FunctionView>
        if (!this.state.loaded) {
            return this.renderLoadingView();
        } else {
            return this._ListView();
        }
    }

    componentDidMount() {
        // 添加监听
        this.viewDidAppear = this.props.navigation.addListener('didFocus', obj => {
        });
        this.fetchData();
        this.functionEnter();
        // this.getBanner();

    }

    _View() {
        return (<View>
            <TouchableHighlight/>
        </View>);
    }

    componentWillUnmount() {
        // 移除监听
        this.viewDidAppear.remove();
    }

    renderLoadingView() {
        return (<View><Text>loading</Text>
        </View>);
    }

    showView() {
        return (
            <View style={{flexDirection: 'column'}}>
                <FlatList
                    data={this.state.dataSource}
                    style={styles.list}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, separators}) =>
                        <TouchableHighlight onShowUnderlay={separators.highlight}
                                            onHideUnderlay={separators.unhighlight}>
                            <View style={{backgroundColor: 'white'}}>
                                <Text style={styles.title}>{item.title}</Text></View>
                        </TouchableHighlight>
                    }>
                </FlatList>
            </View>);
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10,
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
    },
    doubleImageConstaint: {
        flex: 1,
        flexDirection: 'row',
    },
    doubleImageset: {
        flex: 1,
        width: Dimensions.get('window').width / 2,
        height: 100,
        resizeMode: 'stretch',
    },
    imageTitle: {
        width: Dimensions.get('window').width,
        height: 50,
    },
});
//跳转
{/* onPress={() => this.props.navigation.navigate('Details')} */
}
{/* <Button title="Go to Details"
        onPress={() => this.props.navigation.navigate('Details')}>是</Button>
        <Button
          // 设置新内容,进行合并
          onPress={() => this.props.navigation.setParams({name: 'Lucy'})}
          title="Set title name to 'Lucy'"
        /> */
}

