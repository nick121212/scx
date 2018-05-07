import { login } from './containers/index';
import { usrbaseinfo } from '../../mycenter/baseinfo/containers';

let pageConfig = Object.assign({}, {
    async onLoad(options) {

    },
    formSubmit(e) {

        let phoneNo = e.detail.value['phonenum'];
        let checkCode = e.detail.value['checkcode'];
        if (phoneNo == '') {
            wx.showModal({
                title: '',
                content: '手机号码不能为空',
            })
        }
        else if (checkCode == '') {
            wx.showModal({
                title: '',
                content: '验证码不能为空',
            })
        }
        else if (phoneNo.length != 11) {
            wx.showModal({
                title: '',
                content: '电话号码长度错误',
            })
        }
        else {
            this.doLogin(phoneNo, checkCode);
            // this.doGetUsrBaseInfoData();
        }

    },

}, {});

Page(login(usrbaseinfo(pageConfig)));
