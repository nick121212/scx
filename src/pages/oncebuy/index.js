import {
	oncebuy
} from './containers/index';
import {
	pay
} from '../pay/containers/index'
let args = {};
let servicetype; //文章或购买类型
let serviceId; //文章或者情报物id
let qingbao; //单个情报物数据
let article; //当个书联邦文章数据
/**
 * 数联帮和情报物合集购买页面，四个档次（1个月，3个月，半年，12个月）
 */
let pageConfig = Object.assign({}, {
	/**
	 * 页面onload钩子
	 * @param {*} options
	 *	type      文章或购买类型
	 *  serviceId 文章或者情报物id
	 */
	async onLoad(options) {
		servicetype = options.type;
		// 1,单个画报类型
		if (servicetype == 1) {
			serviceId = options.serviceId;
			this.qingBaoInfo();
		}
		// 单个数联帮类型
		else if (servicetype == 0) {
			serviceId = options.serviceId;
			this.articleInfo();
		} else {
			// 合集
			let info = {};
			this.doSaveSinglePiceInfo(info);
		}
		// 暂时没用
		this.setData({
			serviceType: servicetype
		})
		// type = 2 or type = 3 表示合集购买，需要显示多个购买选项（1个月，3个月，6个月，12个月）
		this.doSelectBuyType(servicetype == 3 || servicetype == 2);

	},

	qingBaoInfo() {
		for (let i = 0; i < this.data.qingbaolst.length; i++) {
			if (serviceId == this.data.qingbaolst[i].id) {
				qingbao = this.data.qingbaolst[i];
				break;
			}
		}
		let info = {
			id: 4,
			chongzhi: '',
			song: '￥' + qingbao.discountPrice,
			money: qingbao.discountPrice * 10 * 10,
			styleid: qingbao.styleId
		}

		this.doSaveSinglePiceInfo(info);

		args = {
			total_free: this.data.singlePriceInfo.money,
			service_type: servicetype,
			service_date: 0,
			service_id: serviceId,
			styleid: qingbao.styleId,
			url: qingbao.url,
			title: qingbao.title

		}

	},

	articleInfo() {
		for (let i = 0; i < this.data.articles.length; i++) {
			if (serviceId == this.data.articles[i].id) {
				article = this.data.articles[i];
				break;
			}
		}
		let info = {
			id: 4,
			chongzhi: '',
			song: '￥' + article.discount_price,
			money: article.discount_price * 10 * 10,
		}
		this.doSaveSinglePiceInfo(info);

		args = {
			total_free: this.data.singlePriceInfo.money,
			service_type: servicetype,
			service_date: 0,
			service_id: serviceId,
		}
	},

	//合集购买模块
	selectNav(event) {
		let id = event.target.dataset.id;
		let date = id;
		//   index = parseInt(event.target.dataset.index);

		self = this;
		this.setData({
			curNav: id,
			// curIndex: index,
		})

		//画报集合3，数联帮集合购买2
		if (servicetype == 3 || servicetype == 2) {


			let money = 0;
			for (let i = 0; i < this.data.navList.length; i++) {
				if (this.data.navList[i].id == id) {
					money = this.data.navList[i].money;
					break;
				}
			}
			args = {
				total_free: money,
				service_type: servicetype,
				service_date: date,
				service_id: 0,
			}
		} //单个画报
		else if (servicetype == 1) {

		} //单个数联帮
		else if (servicetype == 0) {

		}
	},
	//去充值功能模块
	goblance: function (event) {
		if (servicetype == 2 && args.total_free == undefined) {
			wx.showModal({
				title: '温馨提示',
				content: '请选择购买类型',
				showCancel: false, //不显示取消按钮
				confirmText: '确定'
			})
		} else {
			this.doReqPay(args);
		}
	},
	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {
		args = {}
		// wx.navigateBack({ delta: 1 });
	},
});

Page(oncebuy(pay(pageConfig)));
