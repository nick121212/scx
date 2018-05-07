import { article, baseinfo, grid } from './containers/index';
import { dingyuelist } from '../dingyuelist/containers/index';
import { usrbaseinfo } from '../mycenter/baseinfo/containers/index';
import { qingbaolist } from '../qingbaolist/containers/index'
import { settings } from '../mycenter/settings/containers';
let pageConfig = Object.assign({}, {
    async onLoad() {
        await this.doGetActicleData(this.data);
        this.doGetBaseInfoData();
        //登陆首页获取店铺信息
        if (this.data.usrdata.shop_id == undefined) {
            await this.doGetUsrBaseInfoData();
        }
        
        if(this.data.usrdata.shop_id != undefined){
             this.doGetIndexQingBaoList(this.data,this.data.usrdata.shop_id);//
            await this.doGetExtraData(this.data.usrdata.market_id);
        }
       

    },
     onPullDownRefresh: function () {
        wx.stopPullDownRefresh();

    },
    gotowhatpage:function(){
        wx.navigateTo({
            url: '/pages/what/what',
            success: function(res){
                // success
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })
    },

    touchHandler:function(){

    },
    gotoorder: function () {
        wx.switchTab({
            url: '/pages/order/index',

        })
    },
    //如果status == 0表示该文章已经购买，或者原价为0点击直接跳转到页面详情，
    //否则按照打折价格确定跳转页面
    shuliangotodetail: function (e) {

        let data = e.currentTarget.dataset;
        let id = data.id;
        let price = data.price;
        let discountPrice = data.discountprice;
        let status = data.status;

        if (status == 0 || price == 0) {
            wx.navigateTo({
                url: '/pages/article/index?id=' + id + '&frombuy=' + '0',

            })
        } else {

            wx.navigateTo({
                url: '/pages/articlebriefinfo/index?id=' + id + '&discountPrice=' + discountPrice,
            })
        }

    },
    qingbaogotodetail: function (e) {
 
        let data = e.currentTarget.dataset;
        let id = data.id;
        let price = data.price;
        let discountPrice = data.discountprice;
        let subscribe = data.subscribe;
        let styleid = data.styleid;
        let url = data.url;
        let title = data.title;
        //如果是订阅的，直接跳转到最新一期(期刊号最大)的期刊
        //
        if (subscribe == true) {
            wx.navigateTo({
                url: '/pages/qingbaodetail/index?id=' + id + '&styleid=' + styleid + '&url=' + url + '&frombuy' + '0' + '&title=' + title,

            })
        }//否则都要走购买逻辑
        else {

            wx.navigateTo({
                url: '/pages/qingbaobriefinfo/index?id=' + id + '&discountPrice=' + discountPrice,
            })
        }

    },
    enableMessageChanged(e) {
        try {
            this.setSettingsData({ enableMessage: e.detail.value });
            this.saveSettings({ enableMessage: e.detail.value });
        } catch (error) {
            
        }

    },
   
});


Page(article(baseinfo(grid(dingyuelist(usrbaseinfo(qingbaolist(settings(pageConfig))))))));