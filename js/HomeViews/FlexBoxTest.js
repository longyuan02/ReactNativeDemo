/* eslint-disable  */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, SectionList, Alert} from 'react-native';

export default class FlexBoxTest extends Component{
   render() {
    //    return this.direction()
    // return this.justifyContent()
    // return this.alignItems()
    // return this.alignContent()
    return this.flexBase();
    }
    // Flex Direction 默认纵轴排列 
    direction(){
        return(
            // 尝试把`flexDirection`改为`column`看看
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
    </View>
        );
    }
    // Justify Content 子元素在靠近主轴排列方式
    justifyContent(){
        // flex-start、center、flex-end、space-around、space-between以及space-evenly
        return(
      // 尝试把`justifyContent`改为`center`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
        );
    }
    //alignItem 子元素在次轴的排列方式(主轴的垂直轴)
    alignItems(){
       //flex-start、center、flex-end以及stretch
       //注意 stretch生效-->子元素在次轴的width需要为0
        return (
            // 尝试把`alignItems`改为`flex-start`看看
            // 尝试把`justifyContent`改为`flex-end`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50,height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50,height: 100, backgroundColor: 'steelblue'}} />
            </View>
          );
    }
        //alignSelf 与alignItem效果相同-->使用场景覆盖掉父容器的alignItem效果
        alignSelf(){
        //flex-start、center、flex-end以及stretch
        //注意 stretch生效-->子元素在次轴的width需要为0
         return (
             // 尝试把`alignItems`改为`flex-start`看看
             // 尝试把`justifyContent`改为`flex-end`看看
             // 尝试把`flexDirection`改为`row`看看
             <View style={{
               flex: 1,
               flexDirection: 'column',
               justifyContent: 'flex-start',
               alignItems: 'flex-start',
             }}>
               <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
               <View style={{width: 50,height: 50, backgroundColor: 'skyblue'}} />
               <View style={{width: 50,height: 100, backgroundColor: 'steelblue'}} />
                         <View style={{
                         flex: 1,
                         flexDirection: 'row',
                         justifyContent: 'space-around',
                         alignSelf:'center'
                         }}>
                          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                         </View>
             </View>
           );
     }

     alignContent(){
        return(
            <View style={{width:100,height:100,backgroundColor:'#FF0000',flexWrap:'nowrap',flexDirection:'row'}}>
                <Text numberOfLines={1} style={{flexShrink: 1,width:100,height:100,backgroundColor:'#FFFF00'}}>758.</Text>
                <Text numberOfLines={1} style={{flexGrow: 1,  width:'auto',height:100,backgroundColor:'#F0F000'}}>23</Text>
            </View>
            
        )
     }
    //  弹性基础，成长和收缩,标题的内容是可收缩的,如果容器宽度不够,标题就会缩减内容
     flexBase(){
            return(
                <View style={{
                height: 50,
                marginTop: 30,
                width:500,
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: "#ff0000"
              }}>
                <Text
                  numberOfLines={1}
                  style={{
                    flexShrink: 1,  // 空间不足时，先被压缩
                    backgroundColor: '#ff8500',
                  }}>标题很长很长很长很长很长很长很长很长很长很长</Text>
                <Text
                  numberOfLines={1}
                  style={{
                    marginLeft:10,
                    backgroundColor: '#00ff00'
                  }}>标签</Text>
                <Text
                  numberOfLines={1}
                  style={{
                    flexGrow: 1,       //占据额外空间
                    marginLeft:10,
                    textAlign:'right',  //居右
                  }}>距离</Text>
              </View>
            );
     }
}
const styles=StyleSheet.create({
    // containt:{
    //     flexDirection:'row',
    // }
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
});