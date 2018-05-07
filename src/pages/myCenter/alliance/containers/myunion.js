import { connect } from '../../../../libs/weapp-redux';
import { proxy } from '../../../modelproxy/index';
import { getMyUnion, getShopInUnion, exitUnion ,assignmentData} from '../actions/myunion'
import { reKey } from '../constants/myunion';

export const mapStateToProps = (state, props) => {

    return {
        ...state.app.union[reKey],
        thisusrInfo: state.app.usrbaseinfo.usrbaseinfo.usrinfo,
        baseinfo: state.app.home.baseinfo.baseinfo,


    };
};


export const mapDispatchToProps = (dispatch) => ({
    // 获取店铺当前所在联盟
    doGetMyUnion: async (id) => {

        await dispatch(getMyUnion(proxy.execute("/deploy/getCurrentUnion", {
            params: {
                shopId: id

            }

        }).then((data) => {
            if (data.data.data.length) {
                return data.data.data;
            }
            return {};

        })
        ));

    },
    doAssignSelectMyUnionData(ids,unions,shops) {
        dispatch(assignmentData({ ids: ids, unions: unions ,shops:shops}
        ));
    },
    //获取指定联盟下的所有店铺
    doGetAllShopInUnion: async (id) => {
        await dispatch(getShopInUnion(proxy.execute("/deploy/getShopInfoByUnionId", {
            params: {
                unionId: id
            }

        }).then((data) => {
            if (data.data.data.length > 0) {

                return { data: data.data.data, id: id };
            }
            return {};
        })
        ));
    },
    //退出联盟
    doExitUnion: async (shopid, uids) => {

        if (shopid == -1) {
            wx.showModal({ title: '提示', content: '请选择要退出的商户组', })
        } else {
            await dispatch(exitUnion(proxy.execute("/deploy/exitUnion", {
                params: {
                    shopId: shopid,
                    unionIds : uids
                }

            }).then((data) => {
                if (data.data.code == 200) {
                    return {};
                }
                return { };
            })
            ));
        }



    }

});

export const container = connect(mapStateToProps, mapDispatchToProps);
