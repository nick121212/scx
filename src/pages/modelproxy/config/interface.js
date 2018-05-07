export default {
    "state": "local",
    "key": "deploy",
    "engine": "default",
    "mockDir": "./mocks/",
    "title": "运维自动发布系统接口配置",
    "states": {
        "local": "http://club.uat1.rs.com",
        "dev": "https://club.mmall.com",
        // "text":"http://club.uat1.rs.com"
    },
    "interfaces": [{
        "path": "/d-api/details/isLogin",
        "method": "get",
        "key": "isLogin",
        "title": "登录接口"
    }, {
        "path": "/mng/authCode/add",
        "method": "post",
        "key": "test1",
        "title": "保存手机号 和 crc32码 信息"
    }, {
        "path": "/d-api/details/register/",
        "method": "get",
        "key": "register",
        "title": "根据手机号与 CRC32 码注册该商铺"
    }, {
        "path": "/d-api/details/shopInfo",
        "method": "get",
        "key": "shopInfo",
        "title": "店铺信息展示并确认信息"
    }, {
        "path": "/t-api/union/getUnionByMarketId",
        "method": "get",
        "key": "getUnionByMarketId",
        "title": "根据商场id获取联盟列表"
    }, {
        "path": "/t-api/shopUnion/getShopInfoByUnionId",
        "method": "get",
        "key": "getShopInfoByUnionId",
        "title": "根据联盟id获取所属店铺列表"
    }, {
        "path": "/t-api/shopUnion/joinShopUnion",
        "method": "post",
        "key": "joinShopUnion",
        "title": "加入联盟"
    }, {
        "path": "/d-api/details/updateBenefit",
        "method": "get",
        "key": "updateBenefit",
        "title": "保存优惠信息"
    }, {
        "path": "/t-api/details/updateBenefit",
        "method": "get",
        "key": "test1",
        "title": "加入联盟"
    }, {
        "path": "/d-api/details/historyBenefit",
        "method": "get",
        "key": "historyBenefit",
        "title": "加入联盟"
    },
    {
        "path": "/d-api/details/articleList",
        "method": "get",
        "key": "articleList",
        "title": "获取文章列表"
    }, {
        "path": "/d-api/details/articleDetails",
        "method": "get",
        "key": "articleDetails",
        "title": "获取文章列表"
    }, {
        "path": "/x-api/productSku/findWaitProductSku",
        "method": "get",
        "key": "findWaitProductSku",
        "title": "获取待抢商品信息接口"
    }, {
        "path": "/x-api/order/createOrder",
        "method": "get",
        "key": "createOrder",
        "title": "抢单接口"
    }, {
        "path": "/x-api/order/findHistoryShopOrder",
        "method": "get",
        "key": "findHistoryShopOrder",
        "title": "获取所有已经抢的订单接口"
    }, {
        "path": "/t-api/shopUnion/getHistoryUnion",
        "method": "get",
        "key": "getHistoryUnion",
        "title": "获取店铺历史联盟信息"
    },
    {
        "path": "/t-api/union/getNotJoinUnion",
        "method": "get",
        "key": "getNotJoinUnion",
        "title": "获取没有加入的联盟列表"
    },
    {
        "path": "/d-api/details/isRegister",
        "method": "get",
        "key": "isRegister",
        "title": "账号是否注册"
    },
    {
        "path": "/t-api/shopUnion/exitUnion",
        "method": "get",
        "key": "exitUnion",
        "title": "退出联盟"
    },
    {
        "path": "/t-api/shopUnion/getCurrentUnion",
        "method": "get",
        "key": "getCurrentUnion",
        "title": "获取当前联盟"
    }, {
        "path": "/x-api/order/findNewHistoryShopOrder",
        "method": "get",
        "key": "findNewHistoryShopOrder",
        "title": "获取当前抢单记录"
    }, {
        "path": "/x-api/userInfo/isSend",
        "method": "get",
        "key": "isSend",
        "title": "更改当前设置接口"
    }, {
        "path": "/x-api/userInfo/updateIsSend",
        "method": "get",
        "key": "updateIsSend",
        "title": "更改当前设置接口"
    },{
        "path": "/w-api/getPropertyList",
        "method": "get",
        "key": "getPropertyList",
        "title": "获取情报物"
    },{
        "path": "/d-api/pay/confirmOrder",
        "method": "get",
        "key": "confirmOrder",
        "title": "支付接口"
    },{
        "path": "/d-api/service/userService",
        "method": "get",
        "key": "userService",
        "title": "我的订阅清单"
    },{
        "path": "/w-api/subscribeProperty",
        "method": "get",
        "key": "subscribeProperty",
        "title": "获取用户单个购买的情报物清单"
    },{
        "path": "/w-api/showIssue",
        "method": "get",
        "key": "showIssue",
        "title": "获取单个情报物现有所有期刊"
    },{
        "path": "/x-api/statistics/getAlldata",
        "method": "get",
        "key": "getAlldata",
        "title": "获取首页订单相关数据"
    }, {
        "path": "/d-api/details/delLogin",
        "method": "get",
        "key": "delLogin",
        "title": "获取文章列表"
    }]
};
