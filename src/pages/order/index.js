import { order, main, history } from './containers/index';

import { settings } from '../mycenter/settings/containers';

import { baseinfo } from '../index/containers';
// import { usrbaseinfo } from '../mycenter/baseinfo/containers';
import { proxy } from "../modelproxy";


let timeId = 0;
var app = getApp();
let pageConfig = Object.assign({}, {
    async onLoad() {

        // if (!this.data.usrinfo || !this.data.usrinfo.shop_id) {
        //     wx.navigateTo({
        //         url: "/pages/welcome/loading/index"
        //     });
        // }

        if (this.data.usrinfo.shop_id != undefined) {
            this.doGetBaseInfoData();
            this.doGetHisOrdersData(this.data.history);
            this.doGetOrdersData();

            proxy.execute("/deploy/isSend", {}).then((data) => {
                this.setSettingsData({ enableMessage: !!data.data.data.isSend });
            });

            timeId = setInterval(() => {
                this.doGetOrdersData();
            }, 30 * 1000);
        }

    },
    enableMessageChanged(e) {
        this.setSettingsData({ enableMessage: e.detail.value });
        this.saveSettings({ enableMessage: e.detail.value });
    },
    onLeave() {
        clearInterval(timeId);
    },
    onShow() {
        app.globalData.orderpageopentimes++
        let noinfo = this.data.usrinfo === undefined || this.data.usrinfo == null || this.data.usrinfo.shop_id === undefined || this.data.usrinfo.shop_id == null;
        if (app.globalData.orderpageopentimes >= 2 && (noinfo)) {
            app.globalData.orderpageopentimes = 0;

            wx.reLaunch({
                url: '/pages/index/index',
                success: function (e) {

                }
            })

        }
        else if (noinfo) {
            wx.navigateTo({
                url: '/pages/welcome/loading/index',

            })
        }

    },
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh();
        setTimeout(() => {
            if (this.data.activeIndex === 0) {
                this.doGetOrdersData();
            } else {
                this.doGetHisOrdersData(this.data.history, true);
            }
        }, 100);

    },
    onReachBottom: function () {
        if (this.data.activeIndex === 1) {
            this.loadMoreHistory();
        }
    },
    loadMoreHistory: function () {
        if (this.data.history.loading || !this.data.history.hasMore) {
            return;
        }

        this.doGetHisOrdersData(this.data.history, false);
    },
    tabClick: function (e) {
        this.doChangeIndex({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: ~~e.currentTarget.id
        });
    },
    createOrder: function (e) {
        this.doCreateOrder(e.currentTarget.id);
    }
}, {});


Page(order(main(history(baseinfo(settings(pageConfig))))));
