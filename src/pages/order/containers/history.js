import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { getOrdersAction, createOrderAction, setLoadingAction, setHasMoreAction, setPagInfoAction } from '../actions/history';
import { reKey } from '../constants/history';

// const app = getApp(); //  eslint-disable-line no-undef
export const mapStateToProps = (state, props) => {
    return {
        history: state.app.orders[reKey]
    };
};

export const mapDispatchToProps = (dispatch) => ({
    // 获取文章列表
    doGetHisOrdersData: async ({ pageSize, pageNum }, refresh = true) => {
        dispatch(setLoadingAction(true));

        if (refresh) {
            await dispatch(setPagInfoAction({
                pageSize: pageSize,
                pageNum: 0
            }));
        }

        await dispatch(getOrdersAction(proxy.execute("/deploy/findHistoryShopOrder", {
            params: {
                pageNumber: refresh ? 0 : pageNum + 1,
                pageSize
            }
          
        }).then((data) => {
            if (!data.data.data || !data.data.data.hasNextPage) {
                dispatch(setHasMoreAction(false));
            } else {
                dispatch(setPagInfoAction({
                    pageSize: pageSize,
                    pageNum: pageNum + 1
                }));
            }

            return { data: data.data.data.content, refresh };
        })));
        dispatch(setLoadingAction(false));
    }
});

export const container = connect(mapStateToProps, mapDispatchToProps);
