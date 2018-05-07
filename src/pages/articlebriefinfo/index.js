import { articlebriefinfo } from './containers/index';
import { pay } from '../pay/containers/index'
var articleId = 0;
var money = -1;
let pageConfig = Object.assign({}, {

    onLoad(options) {
        articleId = options.id;
        this.doGetActicleBriefInfoData(options.id || 90);

        this.setData({
            cost: options.discountPrice * 10 * 10
        })
    },
    onReachBottom() { },
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh();
    },

    listenerPickerSelected: function (e) {
        this.setData({
            index: e.detail.value
        });
       
        if (this.data.index == 0 || this.data.index == 1) {
            let date = e.detail.value;
            let serviceType = 0;
            let pageUrl = '';
            if (this.data.index == 0) {
                serviceType = 0;
                pageUrl = "/pages/oncebuy/index?type=" + serviceType + "&serviceId=" + articleId;
            }
            else {
                serviceType = 2;//文章合集类型
                pageUrl = "/pages/oncebuy/index?type=" + serviceType;
            }
            wx.navigateTo({
                url: pageUrl,

            })

        } else {
            //成为会员
            wx.navigateTo({
                url: "/pages/vip/index",

            })
        }

    },


}, {});


Page(articlebriefinfo(pay(pageConfig)));
