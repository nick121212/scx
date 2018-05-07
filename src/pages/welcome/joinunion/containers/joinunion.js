import { connect } from '../../../../libs/weapp-redux';
import { proxy } from '../../../modelproxy/index';
import { getAllUnion, getAllShopsInUnion, joinUnion,assignmentData} from '../actions/joinunion';
import { reKey } from '../constants/joinunion';

export const mapStateToProps = (state, props) => {
    return {
        ...state.app.loginunion[reKey],
        thisusrInfo: state.app.usrbaseinfo.usrbaseinfo.usrinfo,
        baseinfo:state.app.home.baseinfo.baseinfo
    };
};

export const mapDispatchToProps = (dispatch) => ({
    // 获取商场当前所在联盟
    doGetAllUnion: async (id) => {

        await dispatch(getAllUnion(proxy.execute("/deploy/getUnionByMarketId", {
            params: {
                marketId:id

            }

        }).then((data) => {
            if (data.data.data.length) {
                return data.data.data;
            }
            return {};

        })
        ));

    },
      doAssignmentData(ids, names,unions) {
        dispatch(assignmentData( { ids: ids, names: names,unions:unions}
         ));
    },

    //获取指定联盟下的所有店铺
    doGetAllShopInUnion: async (id) => {
        await dispatch(getAllShopsInUnion(proxy.execute("/deploy/getShopInfoByUnionId", {
            params: {
                unionId: id
            }

        }).then((data) => {

        if (data.data.data.length > 0) {
            return { data: data.data.data};
        }
        return { data: [] };

    })
        ));
    },
    //加入新联盟
    doJoinUnion: async (args) => {
        await dispatch(joinUnion(proxy.execute("/deploy/joinShopUnion", {
            data: args
        }).then((data) => {

            if (data.data.code == 200) {
                // wx.switchTab({
                //     url: '../myinfo/myinfo'
                // }
                // )
            }
            // return {data:[],nav:nav,id:id};

        })
        ));
    }

})
export const container = connect(mapStateToProps, mapDispatchToProps);
