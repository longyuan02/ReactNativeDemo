/* eslint-disable */
import API from './API';
let Address ={
    AppKey:'23',
    REQUEST_SURL:
      'https://cms-uat.gomegold.com/mall/v2/queryMoudleList?channelId=23&page=index_v2&platform=gold.app',
    //图片投资--2图
    FINANCE_OTHER: API.Hosts + "banner/bannerListPage",
       //首页公告
       HOME_NOTICE: API.Hosts + "banner/bannerListPage",
       //秒杀模块
       HOME_SECONDSKILL: API.Hosts + "mall/querySkillInfo",
       //首页/搜索结果页面_猜你喜欢
       HOME_GUESSYOULIKE: API.Hosts + "api/goldCertification/queryRecommend",
       //实物黄金请求
       PHYSICAL_PRICE: API.Hosts + "api/goldCertification/physicalGoldPriceFind",
       //首页_Banner/Menu/List板块描述
       HOME_BANNER_MENU: API.cmsUrl + "mall/v2/queryMoudleList",
       //理财页Banner/Menu/List板块描述
       FINANCE_BANNER_MENU: API.cmsUrl + "mall/v3/queryMoudleList",
       //首页_秒杀板块
       HOME_SECONDSKILL: API.cmsUrl + "mall/querySkillInfo",
       //首页_黄金投资--2图
       HOME_GOLDINVESTMENT: API.cmsUrl + "banner/bannerListPage",
       //首页_爆款推荐--3图
       HOME_HOTRECOMMEND: API.cmsUrl + "banner/bannerListPage",
       //首页_钻戒专区--专题
       HOME_DIAMONDRINGZONE: API.cmsUrl + "topic/",
       //首页_好物推荐--专题
       HOME_GOODTHINGTORECOMMEND: API.cmsUrl + "topic?page=0&rows=3",
       //首页_公告
       HOME_NOTICE: API.cmsUrl + "banner/bannerListPage",
} 
export default Address;