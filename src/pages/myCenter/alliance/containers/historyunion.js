import { connect } from '../../../../libs/weapp-redux';
import { proxy } from '../../../modelproxy/index';
import { getHistoryUnion } from '../actions/historyunion'
import { reKey } from '../constants/historyunion';

export const mapStateToProps = (state, props) => {

    return {
        ...state.app.union[reKey],
        thisusrInfo: state.app.usrbaseinfo.usrbaseinfo.usrinfo,
    };
};


export const mapDispatchToProps = (dispatch) => ({
    // 获取文章列表
    doGetHistoryUnion: async (shopid) => {
        await dispatch(getHistoryUnion(proxy.execute("/deploy/getHistoryUnion", {
            params: {
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


});

export const container = connect(mapStateToProps, mapDispatchToProps);