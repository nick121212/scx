import {
	qingbaobriefinfo
} from './containers/index';
import {
	pay
} from '../pay/containers/index'
var qingbaoId = 0;
var money = -1;
let discountPrice = 0;
let styleid = -1;
let args = {};
let pageConfig = Object.assign({}, {

	onLoad(options) {
		qingbaoId = options.id;

		this.doGetQingBaoBriefInfoData(options.id);
		// 计算价格
		let idx = -1;
		//根据id找到对应查看的情报物列表所在的索引
		for (let i = 0; i < this.data.qingbaolst.length; i++) {
			if (qingbaoId == this.data.qingbaolst[i].id) {
				styleid = this.data.qingbaolst[i].styleId;
				idx = i;
				break;
			}
		}
		//计算情报物的价格，以价格分为单位传给服务器
		this.setData({
			cost: options.discountPrice * 10 * 10,
			briefinfo: this.data.qingbaolst[idx]
		});
	},
	onReachBottom() {},
	onPullDownRefresh: function () {
		wx.stopPullDownRefresh();
	},
	/*原有充值逻辑，暂时去掉
    listenerPickerSelected: function (e) {
        this.setData({
            index: e.detail.value
        });

        if (this.data.index == 0 || this.data.index == 1) {
            let serviceType = 0;
            let pageUrl = ''
            if (this.data.index == 0) {
                serviceType = 1;
                pageUrl = "/pages/oncebuy/index?type=" + serviceType + "&serviceId=" + qingbaoId;
            }
            else {
                serviceType = 3;
                pageUrl = "/pages/oncebuy/index?type=" + serviceType;
            }

            wx.navigateTo({
                url: pageUrl,

            })
        }
        else {
            //成为会员
            wx.navigateTo({
                url: "/pages/vip/index",

            })
        }
    },
*/
	goblance: function (event) {
		args = {
			total_free: parseInt(this.data.cost),
			service_type: 1,
			service_date: 0,
			service_id: this.data.briefinfo.id,
			styleid: this.data.briefinfo.styleId,
			url: this.data.briefinfo.url,
			title: this.data.briefinfo.title
		};

		if (args.total_free === undefined) {
			wx.showModal({
				title: '温馨提示',
				content: '请选择购买类型',
				showCancel: false, //不显示取消按钮
				confirmText: '确定'
			});
		} else {
			// //测试todo
			//  let params = JSON.stringify(args);
			// wx.redirectTo({
			//     url: '/pages/payconfirm/index?args='+params,
			// })
			//原有正确逻辑
			this.doReqPay(args);
		}
		args = {};
	},
}, {});

Page(qingbaobriefinfo(pay(pageConfig)));
