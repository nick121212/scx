

import {logincheckinfo } from './containers/index';
let pageConfig = Object.assign({
    onLoad(options){
        this.doGetShopInfo();

    },
     next (){
        wx.redirectTo({
            url: '/pages/welcome/joinunion/index'
        })
    },
}, {});
Page(logincheckinfo(pageConfig));