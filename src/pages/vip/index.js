import { vip } from './containers/index';
import {pay} from '../pay/containers/index'
let args;
/**
 * vip会员购买选项
 * 目前有四挡，分别为1个月，3个月，半年，12个月navList
 */
let pageConfig = Object.assign({}, {
    async onLoad() {


    },
    // radioChange:function(e){
    //      let date = e.detail.value;
    //      let money = 0;
    //      for(let i = 0; i < this.data.items.length ; i++){
    //         if(this.data.items[i].value == date){
    //             money = this.data.items[i].money;
    //             break;
    //         }
    //      }
    //       args = {
    //          total_free:money,
    //          service_type:4,
    //          service_date:date,
    //          service_id:0
    //      }
    // },
    //  onBuy: function (e) {
    //     if (args != null) {
    //         this.doReqPay(args);
    //         args = null;
    //     }

    // },
     //充值金额分类渲染模块
    selectNav(event) {
        let id = event.target.dataset.id,
            index = parseInt(event.target.dataset.index);

        self = this;
        this.setData({
            curNav: id,
            curIndex: index,
        })

        let date = id;
        let money = 0;
        for (let i = 0; i < this.data.navList.length; i++) {
            if (this.data.navList[i].id == id) {
                money = this.data.navList[i].money;
                break;
            }
        }
        args = {
            total_free: money,
            service_type: 4,
            service_date: date,
            service_id: 0,
        }



    },

    //去充值功能模块
    goblance: function (event) {

        this.doReqPay(args);

		},
		/**
		 * 页面关闭后调用
		 */
     onUnload: function () {
				args = {}
				//返回前一页
        wx.navigateBack({delta: 1});
    },
});

Page(vip(pay(pageConfig)));
