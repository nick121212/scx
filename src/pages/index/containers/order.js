import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { getOrdersAction } from '../actions/order';
import { reKey } from '../constants/order';

// const app = getApp(); //  eslint-disable-line no-undef
export const mapStateToProps = (state, props) => {
    return {
        ...state.app.home[reKey]
    };
};

export const mapDispatchToProps = (dispatch) => ({
    // 获取抢单列表
    doGetOrderData: async (data) => {
        let a = await proxy.execute("/deploy/findWaitProductSku", {});

    }
});

export const container = connect(mapStateToProps, mapDispatchToProps);