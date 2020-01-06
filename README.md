 [api地址](https://reactnavigation.org/docs/zh-Hans/material-bottom-tab-navigator.html)
 [图标索引](https://oblador.github.io/react-native-vector-icons/)
 [图标](https://blog.csdn.net/j550341130/article/details/81205701)

 执行
    cd NavigationOb
    yarn android
     yarn ios
     
### 初始化
    expo init '项目名称'
1. 如果你要创建一个 managed React Native project 请在Managed工作流的开始选择blank模板
2. 如果你想创建一个 原生的 React Native 项目, 在 Bare 工作流的开始选择 minimal 模版
3. 如果你喜欢TypeScript,两种情况下,你都可以选择模板的TypeScript版本。 React Navigation 附带TypeScript类型。
 
#### 在已创建的项目中安装 React Navigation
    yarn add react-navigation

### 项目安装依赖
    |-Expo管理的项目
    |-原生的ReactNative 项目

1. 给Expo管理的项目安装依赖
    expo install react-native-gesture-handler react-native-reanimated

2. 给原生的 React Native 项目安装依赖
    在项目根目录运行命令: yarn add react-native-reanimated react-native-gesture-handler react-native-screens@^1.0.0-alpha.23 react-native-safe-area-context
使用expo安装
 expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context

### 为了支持依赖使用androidx
    yarn add --dev jetifier
    # or with npm
    # npm install --save-dev jetifier
```然后将下面的内容添加到 package.json 中的 postinstall 选项中:
"scripts": {
  "postinstall": "jetifier -r"
}
```

### 手动运行 postinstall 脚本:
    yarn postinstall
    # or with npm
    # npm run postinstall

<pre><code>为了完成 react-native-gesture-handler 在 Android 上的安装,请在 MainActivity.java 中做如下修改:
package com.reactnavigation.example;
import com.facebook.react.ReactActivity;
添加::{
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
}
public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() {
    return "Example";
  }
@Override
protected ReactActivityDelegate createReactActivityDelegate() {
  return new ReactActivityDelegate(this, getMainComponentName()) {
    @Override
    protected ReactRootView createRootView() {
     return new RNGestureHandlerEnabledRootView(MainActivity.this);
    }
  };
}
}</code></pre>

 
 
### final 
    Then add the following at the top of your entry file, such as index.js or App.js:
import 'react-native-gesture-handler'

安装 navigation-stack
yarn add react-navigation-stack

[查看文档时注意看细节说明]

[说明]
1. export default
  如果一个页面有多个class 声明export default 为唯一入口class
  
### 路由基本使用
  1. this.props.navigation.navigate('RouteName') 将新路由推送到堆栈导航器，如果它尚未在堆栈中，则跳转到该页面。
  2. this.props.navigation.push('RouteName') ，并且它会继续推送路由。
  3. this.props.navigation.goBack() `以编程方式返回
  4. this.props.navigation.navigate('RouteName') 返回堆栈中的现有页面，你可以使用 this.props.navigation.popToTop() 返回堆栈中的第一个页面
` navigation ` prop适用于所有屏幕组件（组件定义为路由配置中的屏幕，并且被 React Navigation 渲染为路由）

### navigation-生命周期
 * willFocus -页面将获取焦点
 * didFocus - 页面已获取到焦点（如果有过渡动画，等过渡动画执行完成后响应）
 * willBlur - 页面将失去焦点
 * didFocus - 页面已获取到焦点（如果有过渡动画，等过渡动画执行完成后响应）
>监听在生命周期中
  <pre><code>componentDidMount() {
    // 添加监听
    this.viewDidAppear = this.props.navigation.addListener('didFocus', obj => {
      console.log('======' + obj);
    });
  }
  componentWillUnmount() {
    // 移除监听
    this.viewDidAppear.remove();
  }</code></pre>

### 底部导航
[图标对应](https://oblador.github.io/react-native-vector-icons/)
1. yarn add react-navigation-material-bottom-tabs
    如果使用的是Expo开发，expo自带这个组件，因此无需安装
    否则则需要安装这个库，另外需要react-native link一下或者手动添加到安卓或ios中
//添加图片
1. npm install --save react-native-vector-icons # or yarn add react-native-vector-icons
2. react-native link react-native-vector-icons   # or npm install -g rnpm && rnpm link react-native-vector-icons
3.切换图片库 /"对应库" eg:/MaterialIcons  /FontAwesome
    import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
    import FontAwesome from 'react-native-vector-icons/FontAwesome';
<pre><code>
    navigationOptions: ({ navigation }) => ({
          title: '首页',
          tabBarIcon: ({ tintColor }) => (
          <Icon name='home' color={tintColor} size={24} />
      ),
</code></pre>


export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: '主页',
        tabBarIcon: ({tintColor}) => (
          // eslint-disable-next-line react/react-in-jsx-scope
          <Icon name="ios-home" color={tintColor} size={24} />
        ),
      },
    },
    Person: {
      screen: Person,
      navigationOptions: {
        tabBarLabel: '设置',
        tabBarIcon: ({tintColor}) => (
          // eslint-disable-next-line react/react-in-jsx-scope
          <Icon name="ios-settings" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Settings',
    // order: ['Settings', 'Home'],
    activeTintColor: 'black',
    inactiveTintColor: '#333',
    // 缩放图标的效果
    shifting: true, // 默认在大于3个路由时为true, 如果显式的设置为true了则少于3个时也会显示效果
    barStyle: {
      backgroundColor: 'orange',
    },
  },
);

  ###### 初始写入代码
  <pre><code>
  import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './js/HomeView';
import Person from './js/Person';
//路由配置
const AppNavigator = createStackNavigator(
  Profile:{
    Home: HomeScreen,
    Details: Person,
  },
  {
    // 初始名称为 [Details]: Person
    initialRouteName: 'Home',
  },
);
export default createAppContainer(AppNavigator);
</code></pre>

###### 操作对象
    //方法一保留id
       let data = (({id}) =>({id}))(form);
    //方法二保留除了description以外的元素
       let {description, ...data} = form;
       console.log("test=====1=",data) // data:{ id: '011', name: '测试一'}
>>HomeView.js let {item,...datas}=responseData.responseParams.modules;  
```   
数据添加'...'不可以省略   
let person = {name: "Amy", age: 15};
let someone = { ...person, name: "Mike", age: 17};
someone;  //{name: "Mike", age: 17}   
新建数组-->对象接收-->forEach添加-->对象接收
let datas=new Array();
this.state.dataSouce=datas;
this.state.singleData.forEach((item,index)=>{
this.state.dataSouce[0]={this.state.dataSouce[0],item}
})
```

[注意事项] 
1. SectionList 
```
sections={this.state.putDataSource}//数组数据部分参数名必须为"data":[]   
*设置数组*   
建议方法   
renderItem={({item}) = >this._ImageContent(item)}   
无效方法   
renderItem={this._ImageContent}   
```

2. FlastList   
```
return (<FlatList
               data={datas}
               keyExtractor={this._keyExtractor}
               // renderItem={({item}) => <Text>{item.imgUrl}</Text>}>
               renderItem={({item}) =>
                   <View style={styles.doubleImageConstaint}>
                       <Image style={styles.doubleImageset}
                              source={{uri: item.imgUrl}}/></View>}>
               renderItem={this._renderItem}>
           </FlatList>);   
```   

### 路由使用
```   
路由可以理解为嵌套,全局路由变量注册在最外层路由,每个层级可以嵌套不同的局部路由

```   

### 跳转带参数
```
跳转路由:注册路由 App.js
跳转页面:执行方法
            const navigateAction = NavigationActions.navigate({
                        routeName: 'jumpeWebview',
                        params: {
                            toLinke: tolink,
                        },
                    });
点击事件执行:
            <TouchableOpacity onPress={() => this.props.navigation.dispatch(navigateAction)}></TouchableOpacity>
接收执行:在构造方法中调用
            constructor(pros) {
                    super(pros)
                    this.state = {
                        tolink: this.props.navigation.state.params.toLinke,
                    }
                }
使用参数:
            <WebView source={{uri: this.state.tolink}}/>
```
[参考地址](https://blog.csdn.net/quhongqiang/article/details/88419805)

