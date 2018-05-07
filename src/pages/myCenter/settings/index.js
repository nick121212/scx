import { settings } from './containers/index';
import { proxy } from "../../modelproxy";
import { usrbaseinfo } from '../../mycenter/baseinfo/containers';
let pageConfig = {
    async onLoad() {
        await proxy.execute("/deploy/isSend", {}).then((data) => {
            this.setSettingsData({ enableMessage: !!data.data.data.isSend });
        });
    },
    onReachBottom() { },
    doSaveSettings: function () {
        this.saveSettings(this.data);
    },
    enableMessageChanged(e) {
        this.setSettingsData({ enableMessage: e.detail.value });
        this.saveSettings({ enableMessage: e.detail.value });
    },
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh();
    },
    exitlogin: function () {
        var that = this;
        wx.showModal({
            title: "退出确认",
            content: "退出账号，将无法看到数联小程序为您精心准备的精彩内容以及推送的短信邀约",
            showCancel: true,
            cancelText: "取消",
            confirmText: "确认",
            success: function (sm) {
                if (sm.confirm) {
                    try {
                          that.doDelLogin(that.doGetUsrBaseInfoData);
                    } catch (error) {
                        console.log("注销错误",error)
                    }
                  
                    console.log("确认退出")
                }

                else
                    console.log("取消确认")
            },


        })
    }
};

Page(settings(usrbaseinfo(pageConfig)));
