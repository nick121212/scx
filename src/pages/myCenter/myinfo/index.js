import { myinfo } from './containers/index';

import { usrbaseinfo } from '../baseinfo/containers';


import { proxy } from '../../modelproxy/index';

var app = getApp();


let pageConfig = Object.assign({}, {


    async onLoad(options) {
    },
    async onShow() {
        app.globalData.myinfoopentime++

        let noinfo = this.data.usrinfo === undefined || this.data.usrinfo == null || this.data.usrinfo.shop_id === undefined || this.data.usrinfo.shop_id == null;
        if (app.globalData.myinfoopentime >= 2 && (noinfo)) {
            app.globalData.myinfoopentime = 0;
            setTimeout(() => {
                wx.reLaunch({
                    url: '/pages/index/index',
                    success: function (e) {

                    }
                })
            }, 100);

        }
        else if (noinfo) {
            wx.navigateTo({
                url: '/pages/welcome/loading/index',

            })
        }

    },

    onPullDownRefresh: function () {
        wx.stopPullDownRefresh();
    },


}, {});

Page(myinfo(usrbaseinfo(pageConfig)));
