import { qingbaoissue } from './containers/index';
var qingbaoId = -1;
var styleId = -1;
var issueId = -1;//选择要查看的情报物id，如果为-1说明没有选择，弹窗提示
let pageConfig = Object.assign({}, {

	/**
	 * 根据情报物id获取当前情报物下所有的期刊
	 * @param {} options
	 * options.id，情报物id
	 * optons.styleid:直接回传给服务器用
	 *
	 */
    onLoad(options) {

        qingbaoId = options.id;
        styleId = options.styleid;
        // this.doGetQingBaoIssues(qingbaoId);
        this.doGetQingBaoIssues(qingbaoId);

    },
    radioChange: function (e) {

        issueId = e.detail.value;
    },
    gotoqingbaodetail: function (e) {
			//选择要查看的情报物id，如果为-1说明没有选择，弹窗提示
        if (issueId == -1) {
            wx.showModal({
                title: '温馨提示',
                content: '请您选择一个期刊',
            })
        } else {
            wx.navigateTo({
                url: '/pages/qingbaodetail/index?id=' + qingbaoId + '&styleId=' + styleId + '&issueid=' + issueId,

            })
        }

        issueId = -1;
    }

}, {});


Page(qingbaoissue(pageConfig));
