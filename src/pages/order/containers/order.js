import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { getOrdersAction, createOrderAction, setLoadingAction } from '../actions/order';
import { reKey } from '../constants/order';

// const app = getApp(); //  eslint-disable-line no-undef
export const mapStateToProps = (state, props) => {
    return {
        order: state.app.orders[reKey],
        baseinfo: state.app.home.baseinfo,
    };
};

export const mapDispatchToProps = (dispatch) => ({
    // 获取文章列表;
    doGetOrdersData: async (refresh = true) => {
        dispatch(setLoadingAction(true));
        await dispatch(getOrdersAction(proxy.execute("/deploy/findWaitProductSku", {}).then((data) => {
            return { data: data.data.data, refresh };
        })));
        dispatch(setLoadingAction(false));
    },
    doCreateOrder: async (id) => {
        dispatch(setLoadingAction(true));
        await dispatch(createOrderAction(proxy.execute("/deploy/createOrder", {
            params: {
                productSkuId: id
            }
        }).then((data) => {
            wx.showToast({
                title: "抢单成功！",
                icon: "success"
            });
            return Object.assign({}, data.data.data, { productId: id });
        })));
        dispatch(setLoadingAction(false));
    }
});

export const container = connect(mapStateToProps, mapDispatchToProps);
