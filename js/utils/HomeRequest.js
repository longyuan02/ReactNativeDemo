/* eslint-disable */
let HomeRequestList = {
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
}
export default HomeRequestList;
