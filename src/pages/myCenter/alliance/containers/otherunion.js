import { connect } from '../../../../libs/weapp-redux';
import { proxy } from '../../../modelproxy/index';
import { getOtherUnion, getOtherUnionShops, joinNewUnion, assignmentData } from '../actions/otherunion'
import { reKey } from '../constants/otherunion';

export const mapStateToProps = (state, props) => {

    return {
        ...state.app.union[reKey],
        thisusrInfo: state.app.usrbaseinfo.usrbaseinfo.usrinfo,
    };
};


export const mapDispatchToProps = (dispatch) => ({
    // 商场其它所有联盟
    doGetOhterUnion: async (marketid, shopid) => {
        await dispatch(getOtherUnion(proxy.execute("/deploy/getNotJoinUnion", {
            params: {
                marketId: marketid,
                shopId: shopid
            }

        }).then((data) => {
            if (data.data.data.length) {
                return data.data.data;
            }
            return {};

        })
        ));
    },
    doAssignmentData(ids, names,unions,shops) {
        dispatch(assignmentData( { ids: ids, names: names,unions:unions,shops:shops}
         ));
    },

//获取指定联盟下的所有店铺
doGetOhterUnionAllShop: async (id) => {
    await dispatch(getOtherUnionShops(proxy.execute("/deploy/getShopInfoByUnionId", {
        params: {
            unionId: id
        }

    }).then((data) => {

        if (data.data.data.length > 0) {
            return { data: data.data.data };
        }
        return { data: [] };

    })
    ));
},
    //加入新联盟
    doJoinNewUnion: async (args) => {
        await dispatch(joinNewUnion(proxy.execute("/deploy/joinShopUnion", {
            data: args
        }).then((res) => {
            if (res.data.code == 200) {
                wx.showModal({
                    title: '',
                    content: '恭喜加入新商户组',
                });
                return {}
            }

        })
        ));
    }


});

export const container = connect(mapStateToProps, mapDispatchToProps);