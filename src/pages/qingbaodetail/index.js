import {
	qingbaodetail
} from './containers/index';
import {
	qingbaoissue
} from '../qingbaoissue/containers/index';

import {
	qingbaolist
} from '../qingbaolist/containers/index';
var qingbaoId = -1; //情报屋id
var styleId = -1; //直接回传给与服务器
var issueId = -1; //期刊号
let url = ''; //情报物详情url
let maxIssueId = -1; //最大期刊号id == 最新一期的期刊号
//是否是通过购买页跳转到的详情（免费文章也可以直接跳转到购买页）等于1表示是通过购买跳转到当前页面的
//在当前页面销毁的时候，如果是1，则直接跳转到首页（unload()里处理），否则不作处理
let frombuy = -1;
let title = ''; //情报物标题
let huakanId = -1;
let pageConfig = Object.assign({}, {

	/**
	 *
	 * @param {*} options
	 * 	frombuy
	 *  styleid
	 *  url
	 *  title
	 */
	async onLoad(options) {
		frombuy = options.frombuy;
		styleId = options.styleid;
		url = options.url;
		title = options.title;
		//从“我的订阅"，情报物标签跳转过来的，直接跳转到最新期刊(期刊号最大)详情
		if (options.issueid == undefined) {
			//获取所有期刊号
			await this.doGetQingBaoIssues(options.id);
			//在所有期刊里面找到最大的期刊号，最大的期刊号== 最新一期的期刊号
			if (this.data.issues != undefined) {
				for (let i = 0; i < this.data.issues.length; i++) {
					if (this.data.issues[i].issueId > maxIssueId) {
						maxIssueId = this.data.issues[i].issueId;
					}
				}
			} else {
				wx.showModal({
					title: '友情提示',
					content: '当前刊物暂无期刊',
					complete: function (res) {
						wx.navigateBack({
							delta: 1, // 回退前 delta(默认为1) 页面
						})
					}
				})

				return;
			}

		} else {
			//查看指定期刊
			maxIssueId = options.issueid;
		}

		let target = ''
		//拼接情报物链接参数
		let session_key = wx.getStorageSync('cookie');
		huakanId = options.id;
		let versionId = maxIssueId;
		let infographicId = styleId;
		let infogrId = styleId;
		let shopId = this.data.usrdata.shop_id;
		let session_key_value = session_key.substr(session_key.indexOf("=") + 1)
		session_key = encodeURIComponent(session_key_value);
		title = encodeURIComponent(title);
		let urlargs = "?session_key=" + session_key + "&huakanId=" + huakanId + "&versionId=" + versionId + "&infographicId=" + infographicId + "&shopId=" + shopId + "&title=" + title;
		let index = url.indexOf("#")
		target = this.insert_flg(url, index, urlargs);
		target = target + "/" + styleId;
		this.setData({
			detailUrl: target
		})


	},
	// onShow: function () {

	//     setTimeout(() => {

	//         wx.setNavigationBarTitle({ title: '第' + maxIssueId + '期' })
	//     }, 5000);
	// }
	//  ,
	/**
	 * 在str1指定位置n插入str2
	 */
	insert_flg: function (str1, n, str2) {
		if (str1.length < n) {
			return str1 + str2;
		} else {
			let s1 = str1.substring(0, n);
			let s2 = str1.substring(n, str1.length);
			return s1 + str2 + s2;
		}
	},
	onUnload: function () {

		//如果从购买界面返回的，直接返回到首页
		if (frombuy == 1) {
			//改变情报物的购买状态（未订阅-》已订阅）
			this.doChangeStatus(huakanId);
			wx.navigateBack({
				delta: 1, // 返回首页
			})
		}
	}
}, {});


Page(qingbaodetail(qingbaoissue(qingbaolist(pageConfig))));
