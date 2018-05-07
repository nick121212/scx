import { loginbenefit } from './containers/index';
import { logincheckinfo } from '../baseinfo/containers';
import { proxy } from '../../modelproxy/index';
let pageConfig = Object.assign({}, {
    async onLoad(options) {
        this.doGetShopInfo();
    },
    formSubmit(e) {
        let benefitValue = e.detail.value['benefitvalue'];
        if (this.isNull(benefitValue)) {
            benefitValue = "本店为您准备了一份惊喜，凭此短信享有私人专属折扣，就在今日"
        }

        this.doCreateBenefit(benefitValue);
        wx.switchTab({
            url: '/pages/mycenter/myinfo/index',
        })
    },

    isNull(str) {
        if (str == "" || str == null) return true;
        var regu = "^[ ]+$";
        var re = new RegExp(regu);
        return re.test(str);
    }

}, {});
Page(loginbenefit(logincheckinfo(pageConfig)));