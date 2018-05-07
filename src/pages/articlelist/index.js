import { articlelist } from './containers/index';


let pageConfig = Object.assign({}, {
    async onLoad() {
  
        await this.doGetActicleList(this.data);

    },
    loadMore: function () {
        if (this.data.loading || !this.data.hasMore) {
            return;
        }


        this.doGetActicleList(this.data, false);
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

        this.doGetActicleList(this.data, true);
    },

    //  <!--如果show_tatus == 0表示该文章已经购买，点击直接跳转到页面详情，否则按照打折价格确定跳转页面-->

     //如果status == 0表示该文章已经购买，或者原价为0点击直接跳转到页面详情，
     //否则按照打折价格确定跳转页面
    gotodetail:function(e){

        let data = e.currentTarget.dataset;
        let id = data.id;
        let price = data.price;
        let discountPrice = data.discountprice;
        let status = data.status;
       
        if(status == 0 || price == 0){
             wx.navigateTo({
                url: '/pages/article/index?id=' + id + '&frombuy='+'0',

            })
        }else{
            
            wx.navigateTo({
                url: '/pages/articlebriefinfo/index?id=' + id + '&discountPrice=' + discountPrice,
            })
        }

    },
     /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
 
        this.doResetPage();
    },
});

Page(articlelist(pageConfig));
