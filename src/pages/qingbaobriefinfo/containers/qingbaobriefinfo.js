import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { getQingbaoBriefInfoAction } from '../actions/qingbaobriefinfo';
import { reKey } from '../constants/qingbaobriefinfo';

// const app = getApp(); //  eslint-disable-line no-undef
export const mapStateToProps = (state, props) => {

    return {
        ...state.app.qingbaobriefinfo[reKey],
        qingbaolst: state.app.qingbaolist.qingbaolist.qingbaolst

    };
};

export const mapDispatchToProps = (dispatch) => ({
    // 获取情报简介，接口待确认
    doGetQingBaoBriefInfoData: async (id) => {
        // await dispatch(getQingbaoBriefInfoAction(proxy.execute("/deploy/articleDetails", {
        //     params: {
        //         id: id
        //     }
        // }).then((data) => {
        //     if (data.data.data.length) {
        //         return data.data.data[0];
        //     }
        //     return {};
        // })));
    }
});

export const container = connect(mapStateToProps, mapDispatchToProps);