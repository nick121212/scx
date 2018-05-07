import {
	qingbaolist
} from './containers/index';


let pageConfig = Object.assign({}, {
	async onLoad() {
		//获取情报屋列表
		await this.doGetQingBaoList(this.data, this.data.usrdata.shop_id, true);

	},
	loadMore: function () {
		if (this.data.loading || !this.data.hasMore) {
			return;
		}


		this.doGetQingBaoList(this.data, this.data.usrdata.shop_id, false);
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

		this.doGetQingBaoList(this.data, this.data.usrdata.shop_id, false);
	},


	gotodetail: function (e) {

		let data = e.currentTarget.dataset;
		let id = data.id;
		let price = data.price;
		let discountPrice = data.discountprice;
		let subscribe = data.subscribe;
		let styleid = data.styleid;
		let url = data.url;
		let frombuy = 0;
		let title = data.title;
		//  frombuy = !subscribe || price != 0;
		//如果是订阅的，直接跳转到最新一期(期刊号最大)的期刊
		//，其它情况都要走购买流程
		//如果文章是已订阅的，直接跳转到详情
		if (subscribe == true) {
			wx.navigateTo({
				url: '/pages/qingbaodetail/index?id=' + id + '&styleid=' + styleid + '&url=' + url + '&frombuy=' + frombuy + '&title=' + title,
			})
		} //文章未购买，都要走购买逻辑
		else {
			wx.navigateTo({
				url: '/pages/qingbaobriefinfo/index?id=' + id + '&discountPrice=' + discountPrice,
			})
		}

	},
	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {
		//把重置页码为0
		this.doResetPage();
	},


});

Page(qingbaolist(pageConfig));
