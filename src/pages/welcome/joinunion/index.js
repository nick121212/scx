import {  joinunion } from './containers/index';

import { usrbaseinfo } from '../../mycenter/baseinfo/containers';
import { baseinfo } from '../../index/containers';
import { proxy } from '../../modelproxy/index';

let pageConfig = Object.assign({}, {
    async onLoad(options) {
        await this.doGetUsrBaseInfoData();
          this.doGetBaseInfoData();
        await this.doGetAllUnion(this.data.thisusrInfo.market_id);

    },
    inputover(e) {
        this.setData({
            benefitMsg: e.detail.value
        }
        )
    }
    ,
    //查看其它联盟的店铺
    checkboxChange(e) {
        var checkboxItems = this.data.navLeftItems, values = e.detail.value, names = new Array();
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
            this.doGetAllShopInUnion(values[values.length - 1]);
        } else {
            this.setData({
                navRightItems: []
            })
        }
    },
    onClickNext(e) {
        if (this.data.SelectIds != null && this.data.SelectIds.length != 0) {
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
            let _ids = this.data.SelectIds;
            let _names = this.data.SelectNames;
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
              this.doJoinUnion(args);
        }
        wx.navigateTo({
            url: '/pages/welcome/benefit/index',

        })

    },
}, {});

Page(joinunion(usrbaseinfo(baseinfo(pageConfig))));