import { myunion, main, otherunion, historyunion } from './containers/index';

import { usrbaseinfo } from '../baseinfo/containers';
import { baseinfo } from '../../index/containers';

import { proxy } from '../../modelproxy/index';


let pageConfig = Object.assign({}, {
    async onLoad(options) {

        await this.doGetUsrBaseInfoData();
        this.doGetBaseInfoData();
        await this.doGetMyUnion(this.data.thisusrInfo.shop_id);
    },

    tabClick: function (e) {
        let idx = e.currentTarget.id;
        this.doChangeUnionIndex({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: idx
        });
        if (idx == 0) {
            this.doGetMyUnion(this.data.thisusrInfo.shop_id);
            this.doAssignmentData([], [], [],[]);
        }
        else if (idx == 1) {
            this.doGetOhterUnion(this.data.thisusrInfo.market_id, this.data.thisusrInfo.shop_id);
            this.doAssignSelectMyUnionData([], [],[]);

        }
        else {
            this.doGetHistoryUnion(this.data.thisusrInfo.shop_id);
            this.doAssignmentData([], [], [],[]);
            this.doAssignSelectMyUnionData([], [],[]);
        }
    },
    //查看自己所在联盟的店铺
    switchMyUnion(e) {
        let nav = e.target.dataset.index;
        this.doGetAllShopInUnion(this.data.myunions[nav].shop_union_id, nav);
    },
    //退出联盟
    exitUnion(e) {
        if (this.data.selectIds.length != 0) {

            this.doExitUnion(this.data.thisusrInfo.shop_id, this.data.selectIds);
            //退出联盟后重新获取自己所在联盟列表，刷新页面（懒人做法）
            this.doGetMyUnion(this.data.thisusrInfo.shop_id);
        } else {
            wx.showModal({
                title: '',
                content: '请选择要退出的商户组',
            });
        }


    },
    //我的联盟管理（主要是退出联盟）
    mgrMyUion(e) {
        var checkboxItems = this.data.myunions, values = e.detail.value;
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            checkboxItems[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if (checkboxItems[i].shop_union_id == values[j]) {
                    checkboxItems[i].checked = true;
                    break;
                }
            }
        }
        this.doAssignSelectMyUnionData(values, checkboxItems);
        //查看选择的联盟下面的所有店铺
        if (values.length != 0) {
            this.doGetAllShopInUnion(values[values.length - 1]);
        } else {
            this.setData({
                myunionshops: []
            })
        }
    },
    checkboxChange(e) {
        var checkboxItems = this.data.otherunions, values = e.detail.value, names = new Array();
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            checkboxItems[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if (checkboxItems[i].id == values[j]) {
                    checkboxItems[i].checked = true;

                    break;
                }
            }
        }
        for (let k = 0; k < values.length; ++k) {
            for (let m = 0; m < checkboxItems.length; ++m) {
                if (values[k] == checkboxItems[m].id) {
                    names.push(checkboxItems[m].union_name);
                }
            }
        }
        this.doAssignmentData(values, names, checkboxItems);
        //查看选择的联盟下面的所有店铺
        if (values.length != 0) {
            this.doGetOhterUnionAllShop(values[values.length - 1]);
        } else {
            this.setData({
                otherunionshops: []
            })
        }
    },
    //加入新联盟
    changeUnion(e) {
        if (this.data.otherUnionSelectIds != null && this.data.otherUnionSelectIds.length != 0) {
            let _categorys = new Array();
            if (this.data.thisusrInfo.category_ids != null) {
                let _usrcategorys = this.data.thisusrInfo.category_ids.split(',');
                let _usrcatenames = this.data.thisusrInfo.category_names.split(',')
                for (let i = 0; i < _usrcategorys.length; i++) {
                    let _item = {
                        "categoryId": _usrcategorys[i],
                        "categoryName": _usrcatenames[i],
                    }
                    _categorys.push(_item);
                }

            }
            let _selectUnions = new Array();
            let _ids = this.data.otherUnionSelectIds;
            let _names = this.data.otherUnionSelectNames;
            for (let i = 0; i < _ids.length; i++) {
                let _item = {
                    "shopUnionId": _ids[i],
                    "shopUnionName": _names[i],
                }
                _selectUnions.push(_item);
            }
            let args = {
                shopId: this.data.thisusrInfo.shop_id,
                shopName: this.data.thisusrInfo.shop_name,
                categorys: _categorys,
                shopUnions: _selectUnions,
                marketId: this.data.thisusrInfo.market_id,
            }
            this.doJoinNewUnion(args);
            this.doGetOhterUnion(this.data.thisusrInfo.market_id, this.data.thisusrInfo.shop_id);

        }
        else {
            wx.showModal({
                title: '',
                content: '请选择要加入的商户组',
            });
        }


    }


}, {});


Page(myunion(main(otherunion(historyunion(usrbaseinfo(baseinfo(pageConfig)))))));