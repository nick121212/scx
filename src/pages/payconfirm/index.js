//获取应用实例
import {
	payconfirm
} from './containers/index';
import {
	qingbaolist
} from '../qingbaolist/containers/index';
import {
	articlelist
} from '../articlelist/containers/index';
import {
	article
} from '../index/containers/index'
let args = {};
let pageConfig = Object.assign({}, {
	/**
	 * 购买成功后，更改文章的状态，
	 * options:
	 * 	service_type: 购买类型
	 * 0：单个文章类型，充值后直接跳转到文章详情
	 * 1：单个情报物类型，充值后直接跳转到对应情报物页面详情（参数id还是styleid待定）
	 * 2：文章合集类型，重置后直接跳转到我的订阅列表
	 * 3：情报物集合类型，充值成功后直接跳转到“我的订阅页面"
	 * 4：会员类型，也跳转到我的订阅
	 *  service_id：文章ID
	 */
	onLoad: function (options) {
		args = JSON.parse(options.args);

		//单个情报物
		if (args.service_type == 1) {
			this.doChangeStatus(args.service_id);
			this.qingBaoInfo();
		} else if (args.service_type == 0) {
			// 改变数联文章的购买状态
			this.doChangeArticleStatus(args.service_id);
			// 改首页文章列表状态
			this.doChangeIndexArticleStatus(args.service_id);
			// 弹出购买成功提示
			this.articleInfo();
		} else if (args.service_type == 2) { //文章集合购买
			// 改变了所有的文章状态
			this.doChangeAllArticleStatus(); //改变所有文章的订购状态
			// 改变了首页的文章状态
			this.doChangeIndexAllArticleStatus();
			// 弹出购买成功提示
			this.both();
		}
		// 跳转文章详情页
		setTimeout(() => {
			this.confrim();
		}, 6000);

	},
	/**
	 * 跳转文章详情页
	 */
	confrim: function () {
		//单个文章类型，重置后直接跳转
		if (args.service_type == 0) {
			wx.navigateTo({
				url: '/pages/article/index?id=' + args.service_id + '&frombuy=' + '1',

			})
		} //情报物
		else if (args.service_type == 1) {
			wx.navigateTo({
				url: '/pages/qingbaodetail/index?id=' + args.service_id + '&styleid=' + args.styleid + '&url=' + args.url + '&frombuy=' + '1' + '&title=' + args.title,
			})
		}
		// 2：文章集合类型，3：画报集合类型，4：会员类型',  （暂时关闭了情报物3，和会员类型4，现在只有文章合集）
		else if (args.service_type == 2 || args.service_type == 3 || args.service_type == 4) {
			wx.navigateTo({
				url: '/pages/dingyuelist/index?frombuy=' + '0',
			})
		}
	},

	qingBaoInfo() {
		let info = {};
		let qingbao;
		for (let i = 0; i < this.data.qingbaolst.length; i++) {
			if (args.service_id == this.data.qingbaolst[i].id) {
				qingbao = this.data.qingbaolst[i];
				info = {
					desc: '恭喜您成功购买了情报物',
					title: qingbao.title
				}
				break;
			}
		}


		this.doSetOpenDesc(info);

	},

	articleInfo() {
		let info = {};
		let article;
		try {
			for (let i = 0; i < this.data.articles.length; i++) {
				if (args.service_id == this.data.articles[i].id) {
					article = this.data.articles[i];
					info = {
						desc: '恭喜您成功购买了文章',
						title: article.title
					}
					break;
				}
			}


			this.doSetOpenDesc(info);

		} catch (error) {

		}


	},
	//集合購買
	both() {
		let info = {
			desc: '恭喜您成功购买了文章集合',
			title: ''
		}

		this.doSetOpenDesc(info);
	},
	onUnload: function () {

		if (args.service_type == 0 || args.service_type == 2) {
			//返回列表
			wx.navigateBack({
				delta: 1
			});
		}
		args = {}
	},

}, {});
Page(payconfirm(qingbaolist(articlelist(article(pageConfig)))));
