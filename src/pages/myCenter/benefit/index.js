import { curbenefit, main, historybenefit } from './containers/index';

import { usrbaseinfo } from '../baseinfo/containers';
import { baseinfo } from '../../index/containers';

import { proxy } from '../../modelproxy/index';


let pageConfig = Object.assign({}, {

    async onLoad(options) {
        await this.doGetUsrBaseInfoData();

       await this.doGetBaseInfoData();

        let sliderWidth = this.data.sysinfo.windowWidth / this.data.tabs.length;
         let left = (this.data.sysinfo.windowWidth / this.data.tabs.length - sliderWidth) / 2;
        let offset = this.data.sysinfo.windowWidth / this.data.tabs.length * this.data.activeIndex;
          this.doSaveSys(left, offset);

       
       
        let curbenefitvalue = this.data.thisusrInfo.benefit_message;
        this.doSaveNewBenefitMsg(curbenefitvalue);
      


    },

    formSubmit(e) {
        let benefitValue = e.detail.value['benefitvalue'];
        if (this.isNull(benefitValue)) { 
             wx.showModal({
                title: '温馨提示',
                content: '请输入新的约客信息',
            })

        } else {
             this.doSaveNewBenefitMsg(benefitValue);
            this.doSetNewBenefit(benefitValue);
           
        }

    },

     isNull(str){
        if(str == "" || str == null) return true;
        var regu = "^[ ]+$";
        var re = new RegExp(regu);
        return re.test(str);
    }

    ,
    tabClick: function (e) {
        this.doChangeBenfitIndex({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });

        if (e.currentTarget.id == 1) {
            this.doGetHistoryBenefit();
        }
    },

}, { });

Page(curbenefit(main(historybenefit(usrbaseinfo(baseinfo(pageConfig))))));
