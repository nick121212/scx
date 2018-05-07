import { dingyuelist, main } from './containers/index';

import { baseinfo } from '../index/containers';
import { proxy } from "../modelproxy";
import { qingbaoissue } from '../qingbaoissue/containers/index';
//import { qingbaolist } from '../qingbaolist/containers/index';
let tabIdx = 0;
let list;
let frombuy = -1;
let pageConfig = Object.assign({}, {
    async onLoad(options) {
        await this.doGetBaseInfoData();
        this.setSys();
        await this.doGetDingyueList();

        tabIdx = this.data.activeIndex;
        this.reqData(true);
        if (options.frombuy != undefined) {
            frombuy = options.frombuy
        }

    },
    setSys: function () {

        let sliderWidth = 96;
        let left = (this.data.sysinfo.windowWidth / this.data.tabs.length - sliderWidth) / 2;
        let offset = this.data.sysinfo.windowWidth / this.data.tabs.length * this.data.activeIndex;
        this.doSaveSys(left, offset);

    },
    tabClick: function (e) {

        tabIdx = e.currentTarget.id;
        this.doChangeDingYueIndex({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: tabIdx
        });
        this.reqData(true);

    },
    async reqData(refresh) {

        if (tabIdx == 0) {
            //  是会员
            if (this.data.res.associator_collection == 0) {
                //是会员，直接调取数联帮列表
                await this.doGetActicleList(this.data, refresh);
            }//文集服务
            else if (this.data.res.article_collection == 0) {
                await this.doGetActicleList(this.data, refresh);

            }
            //通过单个文章购买的列表W
            else if (this.data.res.article_id != undefined && this.data.res.article_id.length != 0) {
                await this.doGetActicleListByIds(this.data.res.article_id);
            }
        } else {
            //  是会员
            if (this.data.res.associator_collection == 0) {
                //是会员，直接调情报物列表
                await this.doGetMyQingBaoList(this.data, refresh)

            }//情报物批量购买服务
            else if (this.data.res.pictorial_collection == 0) {
                await this.doGetMyQingBaoList(this.data, refresh)
            }
            //单个画报服务
            else if (this.data.res.pictorial_id != null && this.data.res.pictorial_id.length != 0) {
                await this.doGetMyQingBaoLstByIds(this.data.res.pictorial_id);
            }

            list = this.data.myqingbaolst;
            for (var i = 0, len = list.length; i < len; ++i) {

                list[i].open = false;

            }

						//设置情报物列表期刊的打开状态呢	
            this.doSetOpenState(list);

        }




    },
    loadMore: function () {
        if (tabIdx == 1) {
            if (this.data.qingbaoloading || !this.data.qingbaohasMore) {
                return;
            }
        } else {
            if (this.data.loading || !this.data.hasMore) {
                return;
            }
        }

        this.reqData(false);
    },
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh();
        setTimeout(() => {
            this.refresh();
        }, 100);
    },
    onReachBottom: function () {
        this.loadMore();
    },
    refresh: function () {
        if (this.data.loading) {
            return;
        }
        this.reqData(false);
    },
    async showdissues(e) {
        let data = e.currentTarget.dataset;
        let id = data.id;
        //获取所有期刊号
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open;

            } else {
                list[i].open = false

            }
        }
        this.doSetOpenState(list);

        this.setData({
            issues: ''
        });
        //获取期刊所有的期刊列表
        await this.doGetQingBaoIssues(id);

        if (this.data.issues == undefined || this.data.issues.length == 0) {
            wx.showModal({
                title: '友情提示',
                content: '暂无期刊'
            })
        }
    },
    async gotodetail(e) {

        let data = e.currentTarget.dataset;
        let id = data.id;
        let styleid = data.styleid;
        let url = data.url;
        let title = data.title;
        //获取期刊所有的期刊列表
        await this.doGetQingBaoIssues(id);

        if (this.data.issues == undefined || this.data.issues.length == 0) {
            wx.showModal({
                title: '友情提示',
                content: '当前刊物暂无期刊'
            })
        } else {
            wx.navigateTo({
                url: '/pages/qingbaodetail/index?id=' + id + '&styleid=' + styleid + '&url=' + url + '&title='+title,

            })
        }


    },


    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        this.doChangeDingYueIndex({
            sliderOffset: 0,
            activeIndex: 0,
        });
        this.doResetPage();
        if (frombuy == 0) {
      
            // wx.switchTab({
            //     url: '/pages/index/index',
            // })
            wx.navigateBack({
                delta: 1, // 回退前 delta(默认为1) 页面
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
            frombuy = -1;
        }
    },


});

Page(dingyuelist(main(baseinfo(qingbaoissue(pageConfig)))));